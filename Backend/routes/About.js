const router = require('express').Router();
let AboutDB = require('../models/About.models');

router.route('/').get((req, res) => {
    AboutDB.findOne()
    .then(About => res.json(About))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;