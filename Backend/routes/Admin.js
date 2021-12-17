const router = require('express').Router();
let AdminDB = require('../models/Admin.models');

router.route('/login').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let admin = await AdminDB.findOne({username});

    if (!admin)
        return res.status(400).json("User Not Exist");

    if (!(password === admin.password))
        return res.status(400).json("Wrong Password" );

    return res.json("Login Successful");        
  });

//   router.route('/resetPassword').post(async (req,res) => {
//         const username = req.body.username;
        
//         let admin = await AdminDB.findOne({username});

//         if(!admin)
//             return res.status(400).json("User Not Exist");
        
//         admin.pass
//   });

module.exports = router;

