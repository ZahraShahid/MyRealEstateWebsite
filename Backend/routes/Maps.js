const router = require("express").Router();
let MapsDB = require("../models/Maps.models");

router.route("/").get((req, res) => {
  MapsDB.find()
    .then((Maps) => res.json(Maps))
    .catch((err) => res.status(400).json("Error: " + err));
  console.log(res);
});

module.exports = router;
