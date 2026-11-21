const mongoose = require('mongoose');

const uri = "mongodb+srv://ReSellBD:qYwgmPYvqy4vm49q@cluster0.kndeci6.mongodb.net/ReSellBD?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully!");

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Existing collections:", collections.map(c => c.name));

    for (const col of collections) {
      const count = await mongoose.connection.db.collection(col.name).countDocuments();
      console.log(`\nCollection: ${col.name} -> ${count} documents`);
      const sample = await mongoose.connection.db.collection(col.name).find().limit(2).toArray();
      console.log(`Sample from ${col.name}:`, JSON.stringify(sample, null, 2));
    }
  } catch (err) {
    console.error("Error connecting to DB:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

run();
