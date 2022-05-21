const router = require("express").Router();
let SalePropertyDB = require("../models/SalePropertyDetail.models");

router.route("/").get((req, res) => {
    SalePropertyDB.find()
    .then((SaleProperty) => res.json(SaleProperty))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
