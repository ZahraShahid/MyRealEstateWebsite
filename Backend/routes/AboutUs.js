const router = require("express").Router();
let AboutUsDB = require("../models/AboutUs.models");

router.route("/").get((req, res) => {
  AboutUsDB.findOne()
    .then((AboutUs) => res.json(AboutUs))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
