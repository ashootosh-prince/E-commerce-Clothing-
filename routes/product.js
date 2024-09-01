const express = require("express");
const router = express.Router();
const Clothing = require("../models/clothing.js");



// index Routes
router.get("/", async (req, res) => {
    const allClothings = await Clothing.find({});
    res.render("clothing/index.ejs", { allClothings });
  });
  
  // //Show Routes
  router.get("/:id", async (req, res) => {
    let userID = req.params.id.trim();
    const clothing = await Clothing.findById(userID);
    res.render("clothing/show.ejs", { clothing });
  });
  
  // Search Routes
  router.post("/getProduct", async (req, res) => {
    let payload = req.body.payload.trim();
    let search = await Clothing.find({
      name: { $regex: new RegExp("^" + payload + ".*", "i") },
    }).exec();
    search = search.slice(0, 10);
    res.send({ payload: search });
  });

  module.exports = router;