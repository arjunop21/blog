const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("blogDB");
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
