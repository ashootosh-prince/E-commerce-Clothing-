const express = require("express");
const app = express();
const mongoose = require("mongoose");
const clothing = require("./models/clothing.js");

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
app.get("/", (req, res) => {
    res.send("i am root");
  });

  app.get("/test", async(req, res) => {
    let samplesClothing = new clothing({
        name: "Blackberry Bomber",       
        category:"Bomber",
        image: "https://images.unsplash.com/photo-1611593006970-1b8cd8a27873?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "black",
        size: "M",
        price: "2999",
        description: "100% cotton",
        brand: "blackberry",
    });
   await samplesClothing.save();
    console.log("SamplesClothing saved successfully");
    res.send("test done");
  });



const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

