const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const moment = require('moment');

const { DATABASE_URL } = require('./seedHelpers');
const { generate110Users } = require('./data/usersData');
const { RAW_LISTINGS, buildListingDoc } = require('./data/listingsData');
const { generate105Blogs } = require('./data/blogsData');
const { generate105Contacts } = require('./data/contactsData');
const { generate105Newsletters } = require('./data/newslettersData');

async function seedDatabase() {
  console.log('====================================================');
  console.log('🚀 ReSellBD Complete Database Seeding Initializing...');
  console.log('====================================================');

  try {
    await mongoose.connect(DATABASE_URL);
    console.log('✅ Connected to MongoDB cluster successfully.');

    const db = mongoose.connection.db;

    // 1. Check existing documents (WE NEVER DELETE EXISTING DATA)
    const initialCounts = {
      users: await db.collection('users').countDocuments(),
      listings: await db.collection('listings').countDocuments(),
      transactions: await db.collection('transactions').countDocuments(),
      blogs: await db.collection('blogs').countDocuments(),
      contacts: await db.collection('contacts').countDocuments(),
      newsletters: await db.collection('newsletters').countDocuments(),
    };

    console.log('\n📊 Initial Database State (Preserved):');
    console.table(initialCounts);

    // 2. Hash default password for test users: 'password123'
    console.log('\n🔐 Hashing default password (password123) with salt rounds 12...');
    const defaultHashedPassword = await bcrypt.hash('password123', 12);
    console.log('✅ Password hash generated successfully.');

    // 3. SEED USERS (110 new users: 15 Admins, 95 Regular users)
    console.log('\n👤 Generating 110 Users (15 Admins, 95 Regular users)...');
    const newUsersData = generate110Users(defaultHashedPassword);
    
    // Check if any identifier already exists
    const existingIdentifiers = new Set(
      (await db.collection('users').find({}, { projection: { identifier: 1 } }).toArray())
        .map(u => u.identifier)
    );
    const usersToInsert = newUsersData.filter(u => !existingIdentifiers.has(u.identifier));
    
    let insertedUsers = [];
    if (usersToInsert.length > 0) {
      const userInsertResult = await db.collection('users').insertMany(usersToInsert);
      console.log(`✅ Inserted ${userInsertResult.insertedCount} new users into 'users' collection.`);
    } else {
      console.log('ℹ️ Users already present, skipping duplicate user insert.');
    }

    // Fetch all available users (existing + new)
    const allUsers = await db.collection('users').find({ isDeleted: false }).toArray();
    console.log(`📋 Total active users in pool: ${allUsers.length}`);

    // Identify primary test user (user@gmail.com) and primary admin (admin@gmail.com)
    const primaryUser = allUsers.find(u => u.identifier === 'user@gmail.com') || allUsers[0];
    const primaryAdmin = allUsers.find(u => u.identifier === 'admin@gmail.com') || allUsers[1];

    // 4. SEED LISTINGS (112 rich listings, 14 per category, min 5 images each)
    console.log('\n🛍️ Generating 112 Listings across all 8 categories (each with 5+ images)...');
    const listingsToInsert = [];

    for (let i = 0; i < RAW_LISTINGS.length; i++) {
      const raw = RAW_LISTINGS[i];
      let assignedUserId;

      // Assign first 12 listings to primaryUser (user@gmail.com) so user dashboard is rich
      if (i < 12) {
        assignedUserId = primaryUser._id;
      }
      // Assign next 8 listings to primaryAdmin (admin@gmail.com)
      else if (i < 20) {
        assignedUserId = primaryAdmin._id;
      }
      // Distribute rest among other users
      else {
        const userIndex = (i * 7 + 3) % allUsers.length;
        assignedUserId = allUsers[userIndex]._id;
      }

      const listingDoc = buildListingDoc(raw, i, assignedUserId);
      listingsToInsert.push(listingDoc);
    }

    const listingInsertResult = await db.collection('listings').insertMany(listingsToInsert);
    console.log(`✅ Inserted ${listingInsertResult.insertedCount} listings into 'listings' collection.`);

    // Fetch all listings (existing + new)
    const allListings = await db.collection('listings').find({ isDeleted: false }).toArray();
    console.log(`📋 Total active listings in pool: ${allListings.length}`);

    // 5. SEED TRANSACTIONS (105 transactions with full data consistency)
    console.log('\n💳 Generating 105 Consistent Transactions (Orders)...');
    const transactionsToInsert = [];
    const now = moment();
    const currentYear = now.year();
    const currentMonth = now.month(); // 0-indexed (November = 10 or current)

    // Select items for transactions
    const eligibleListings = allListings.slice(0, 105);

    for (let i = 0; i < eligibleListings.length; i++) {
      const listing = eligibleListings[i];
      const sellerId = listing.userID || primaryUser._id;

      // Select buyer distinct from seller
      let buyer = allUsers.find(u => u._id.toString() !== sellerId.toString());
      if (!buyer) buyer = primaryAdmin;

      // Give primaryUser (user@gmail.com) several purchases
      if (i % 6 === 0 && primaryUser._id.toString() !== sellerId.toString()) {
        buyer = primaryUser;
      }

      // Determine date distribution:
      // ~45 transactions in the current month (distributed across days 1 to 20)
      // ~35 in previous month
      // ~25 in month before that
      let txDate;
      if (i < 45) {
        // Current month days 1 to 20
        const day = (i % 20) + 1;
        const hour = (i * 3) % 24;
        const minute = (i * 17) % 60;
        txDate = moment([currentYear, currentMonth, day, hour, minute]).toDate();
      } else if (i < 80) {
        // Last month
        const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        const day = (i % 28) + 1;
        txDate = moment([prevYear, prevMonth, day, 14, 30]).toDate();
      } else {
        // Two months ago
        const twoMonthsAgo = currentMonth <= 1 ? 12 + (currentMonth - 2) : currentMonth - 2;
        const txYear = currentMonth <= 1 ? currentYear - 1 : currentYear;
        const day = (i % 28) + 1;
        txDate = moment([txYear, twoMonthsAgo, day, 11, 15]).toDate();
      }

      const isCompleted = i % 8 !== 0; // 87.5% completed, 12.5% pending
      const status = isCompleted ? 'completed' : 'pending';
      const randomHex = crypto.randomBytes(4).toString('hex');
      const transactionId = `TXN-${txDate.getTime()}-${randomHex}`;

      transactionsToInsert.push({
        buyerID: buyer._id,
        sellerID: sellerId,
        itemID: listing._id,
        status: status,
        paymentMethod: 'online',
        transactionId: transactionId,
        createdAt: txDate,
        updatedAt: txDate
      });

      // If completed, update the listing's status to 'sold' for consistency
      if (isCompleted) {
        await db.collection('listings').updateOne(
          { _id: listing._id },
          { $set: { status: 'sold' } }
        );
      }
    }

    const txInsertResult = await db.collection('transactions').insertMany(transactionsToInsert);
    console.log(`✅ Inserted ${txInsertResult.insertedCount} transactions into 'transactions' collection.`);

    // 6. SEED BLOGS (105 rich blog articles)
    console.log('\n📝 Generating 105 Detailed Blog Articles...');
    const newBlogsData = generate105Blogs();
    const blogInsertResult = await db.collection('blogs').insertMany(newBlogsData);
    console.log(`✅ Inserted ${blogInsertResult.insertedCount} blogs into 'blogs' collection.`);

    // 7. SEED CONTACTS (105 contact inquiries)
    console.log('\n📬 Generating 105 Contact Messages...');
    const newContactsData = generate105Contacts();
    const contactInsertResult = await db.collection('contacts').insertMany(newContactsData);
    console.log(`✅ Inserted ${contactInsertResult.insertedCount} contacts into 'contacts' collection.`);

    // 8. SEED NEWSLETTERS (105 newsletter subscriptions)
    console.log('\n📧 Generating 105 Newsletter Subscriptions...');
    const newNewslettersData = generate105Newsletters();
    const existingNewsletters = new Set(
      (await db.collection('newsletters').find({}, { projection: { email: 1 } }).toArray())
        .map(n => n.email)
    );
    const newslettersToInsert = newNewslettersData.filter(n => !existingNewsletters.has(n.email));
    if (newslettersToInsert.length > 0) {
      const newsletterInsertResult = await db.collection('newsletters').insertMany(newslettersToInsert);
      console.log(`✅ Inserted ${newsletterInsertResult.insertedCount} newsletters into 'newsletters' collection.`);
    }

    // 9. VERIFICATION & CONSISTENCY CHECK
    const finalCounts = {
      users: await db.collection('users').countDocuments(),
      listings: await db.collection('listings').countDocuments(),
      transactions: await db.collection('transactions').countDocuments(),
      blogs: await db.collection('blogs').countDocuments(),
      contacts: await db.collection('contacts').countDocuments(),
      newsletters: await db.collection('newsletters').countDocuments(),
    };

    console.log('\n🎉 ====================================================');
    console.log('🏆 SEEDING COMPLETED SUCCESSFULLY!');
    console.log('====================================================');
    console.log('📊 Final Database Collection Counts:');
    console.table(finalCounts);

    // 10. TEST DASHBOARD ANALYTICS CONSISTENCY FOR PRIMARY USER & ADMIN
    console.log('\n🔍 Testing Dashboard Analytics Consistency for primary accounts:');

    // Test for user@gmail.com
    const userProductsCount = await db.collection('listings').countDocuments({ userID: primaryUser._id, isDeleted: false });
    const userPurchasesCount = await db.collection('transactions').countDocuments({ buyerID: primaryUser._id, status: 'completed' });
    const userCompletedSales = await db.collection('transactions').find({ sellerID: primaryUser._id, status: 'completed' }).toArray();
    
    let userTotalSalesBDT = 0;
    for (const tx of userCompletedSales) {
      const item = await db.collection('listings').findOne({ _id: tx.itemID });
      if (item && item.price) userTotalSalesBDT += item.price;
    }

    console.log(`\n👤 User Account: ${primaryUser.identifier} (${primaryUser.name})`);
    console.log(`  - Total Products Added: ${userProductsCount}`);
    console.log(`  - Total Completed Purchases: ${userPurchasesCount}`);
    console.log(`  - Total Completed Sales: ${userCompletedSales.length}`);
    console.log(`  - Total Sales Revenue: BDT ${userTotalSalesBDT.toLocaleString()}`);

    // Test for admin@gmail.com
    const adminProductsCount = await db.collection('listings').countDocuments({ userID: primaryAdmin._id, isDeleted: false });
    const adminPurchasesCount = await db.collection('transactions').countDocuments({ buyerID: primaryAdmin._id, status: 'completed' });
    const adminCompletedSales = await db.collection('transactions').find({ sellerID: primaryAdmin._id, status: 'completed' }).toArray();
    
    let adminTotalSalesBDT = 0;
    for (const tx of adminCompletedSales) {
      const item = await db.collection('listings').findOne({ _id: tx.itemID });
      if (item && item.price) adminTotalSalesBDT += item.price;
    }

    console.log(`\n👑 Admin Account: ${primaryAdmin.identifier} (${primaryAdmin.name})`);
    console.log(`  - Total Products Added: ${adminProductsCount}`);
    console.log(`  - Total Completed Purchases: ${adminPurchasesCount}`);
    console.log(`  - Total Completed Sales: ${adminCompletedSales.length}`);
    console.log(`  - Total Sales Revenue: BDT ${adminTotalSalesBDT.toLocaleString()}`);

    // Check images count per product
    const listingsSample = await db.collection('listings').find().limit(10).toArray();
    console.log(`\n🖼️ Verifying Image Counts on Listings (First 10 sample items):`);
    listingsSample.forEach(l => {
      console.log(`  - "${l.title.slice(0, 35)}...": ${l.images ? l.images.length : 0} images | Category: ${l.category} | Status: ${l.status}`);
    });

  } catch (err) {
    console.error('❌ Seeding Error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('\n🔒 Disconnected from MongoDB. All processes finished.');
  }
}

seedDatabase();
