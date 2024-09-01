const mongoose = require("mongoose");
const initData = require("./data.js");
const clothing = require("../models/clothing.js");

const MONGO_URL = "mongodb://localhost:27017/clothing";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
  await clothing.deleteMany({});
  await clothing.insertMany(initData.data);
  console.log("Database initialized successfully");
};
initDB();
