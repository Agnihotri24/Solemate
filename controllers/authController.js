const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookies = require("cookie-parser");
const { gentokens } = require("../utils/genToken");


// controller for registered user
module.exports.registerUser = async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    let user = await userModel.find({ email: email });
    // first find if already user create or not

    if (user.length == 1) return res.status(500).send("User Already Exist");

    // now it confirm user not registered so we need to convert password
    // into hash and store all result in database

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);

        else {
          let createuser = await userModel.create({
            name,
            email,
            mobile: Number(mobile.trim()),
            password: hash,
          });

          let token = gentokens(createuser);
          res.cookie("token", token);
          res.redirect("/");
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};


// controller for login user

module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    // Check if user exists
    let user = await userModel.findOne({ email: email });
    if (!user) return res.send("User does not exist");

    // Compare password using await
    bcrypt.compare(password, user.password, (err, isvalid) => {
      if (err) return res.send(err.message);
      else {
        if (isvalid) {
          // after login we have to set cookies with JWT and send with resonse and userprofile
          const token = gentokens(user);
          res.cookie("token", token);
          res.render("shop");
        } else {
          res.send("Invalid password");
        }
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};


module.exports.logoutUser = (req, res)=>
{
   res.cookie("token", "");
   res.redirect("/");
}
