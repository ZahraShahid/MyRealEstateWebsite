let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let SubmittedPropertyRequests = require("../models/SubmittedPropertyRequests.models");

router.post("/create-propertyRequest", (req, res, next) => {
  SubmittedPropertyRequests.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.get("/", (req, res, next) => {
  SubmittedPropertyRequests.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.delete("/delete-propertyRequest/:id", (req, res, next) => {
  SubmittedPropertyRequests.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: "Property post request removed successfully",
      });
    }
  });
});

module.exports = router;
