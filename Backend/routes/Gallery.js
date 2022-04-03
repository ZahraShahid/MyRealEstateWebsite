const router = require("express").Router();
let GalleryDB = require("../models/Gallery.models");

router.route("/").get((req, res) => {
  GalleryDB.find()
    .then((Gallery) => res.json(Gallery))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
