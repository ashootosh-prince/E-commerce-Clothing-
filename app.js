if(process.env.NODE_ENV != 'production'){
  require("dotenv").config();
};
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Clothing = require("./models/clothing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const product = require("./routes/product.js");


const MONGO_URL =process.env.MONGO_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.use("/clothing", product);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
