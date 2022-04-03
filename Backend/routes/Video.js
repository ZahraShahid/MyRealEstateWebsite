const router = require("express").Router();
let VideoDB = require("../models/Video.models");

router.route("/").get((req, res) => {
  VideoDB.find()
    .then((Video) => res.json(Video))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
