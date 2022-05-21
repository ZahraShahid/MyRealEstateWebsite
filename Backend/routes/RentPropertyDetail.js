const router = require("express").Router();
let RentPropertyDB = require("../models/RentPropertyDetail.models");

router.route("/").get((req, res) => {
    RentPropertyDB.find()
    .then((RentProperty) => res.json(RentProperty))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
