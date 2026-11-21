const mongoose = require('mongoose');
const moment = require('moment');
const { DATABASE_URL } = require('./seedHelpers');

async function verify() {
  await mongoose.connect(DATABASE_URL);
  const db = mongoose.connection.db;

  const startOfMonth = moment().startOf('month').toDate();
  const endOfMonth = moment().endOf('month').toDate();

  console.log('Current Month Period:', startOfMonth.toISOString(), 'to', endOfMonth.toISOString());

  const users = await db.collection('users').find({ identifier: { $in: ['user@gmail.com', 'admin@gmail.com'] } }).toArray();

  for (const u of users) {
    const txsThisMonth = await db.collection('transactions').find({
      sellerID: u._id,
      status: 'completed',
      createdAt: { $gte: startOfMonth, $lt: endOfMonth }
    }).toArray();

    console.log(`\nUser: ${u.identifier} (${u.role})`);
    console.log(`  - Total Completed Sales this month: ${txsThisMonth.length}`);

    let revenueThisMonth = 0;
    for (const t of txsThisMonth) {
      const item = await db.collection('listings').findOne({ _id: t.itemID });
      if (item && item.price) revenueThisMonth += item.price;
    }
    console.log(`  - Sales Revenue this month: BDT ${revenueThisMonth.toLocaleString()}`);

    // Check aggregation matching AnalyticsService
    const aggResult = await db.collection('transactions').aggregate([
      {
        $match: {
          createdAt: { $gte: startOfMonth, $lt: endOfMonth },
          status: 'completed',
          sellerID: u._id,
        },
      },
      {
        $lookup: {
          from: 'listings',
          localField: 'itemID',
          foreignField: '_id',
          as: 'listingDetails',
        },
      },
      { $unwind: '$listingDetails' },
      {
        $group: {
          _id: { $dayOfMonth: '$createdAt' },
          totalSales: { $sum: 1 },
          totalRevenue: { $sum: '$listingDetails.price' },
        },
      },
      { $sort: { _id: 1 } },
    ]).toArray();

    console.log(`  - Active Daily Sales Datapoints for Chart:`, aggResult);
  }

  // Also verify total counts in all collections
  const collections = ['users', 'listings', 'transactions', 'blogs', 'contacts', 'newsletters'];
  console.log('\n📊 All Collection Counts Summary:');
  for (const col of collections) {
    const count = await db.collection(col).countDocuments();
    console.log(`  - ${col.padEnd(14)}: ${count} documents`);
  }

  await mongoose.disconnect();
}

verify();
