const router = require("express").Router();
let AdminDB = require("../models/Admin.models");

router.route("/login").post(async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let admin = await AdminDB.findOne({ username });

    if (!admin) return res.json("User not found");

    if (!(password === admin.password))
      return res.json("Password doesn't match");

    return res.json("Login Successful");
  } catch {
    return res.status(400).json("An Unexpected Error Occurred");
  }
});

//   router.route('/resetPassword').post(async (req,res) => {
//         const username = req.body.username;

//         let admin = await AdminDB.findOne({username});

//         if(!admin)
//             return res.status(400).json("User Not Exist");

//         admin.pass
//   });

module.exports = router;
