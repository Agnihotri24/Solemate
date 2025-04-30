const express = require('express');
const router = express.Router();

// all the auth controller
const {registerUser, loginUser, logoutUser} = require('../controllers/authController');

// all the user controller
const {userprofile} = require('../controllers/userController');

// acquire middleware
const isloggedin = require('../middlewares/isloggedin');

// defalut route for users
router.get("/", (req, res) => {
  res.send("Yeah You are at users Route ");
});

// public Route 
// regiser  route for users
router.post("/sign-up", registerUser);


// route for login
router.post("/sign-in", loginUser);


// logout route
router.get('/logout', logoutUser);

router.get('/productdetails', isloggedin,(req, res)=>{res.render("productdetails")})


// All protected Route 
//router for shops
router.get('/shop', isloggedin, (req, res)=>
{
  res.render("shop",);
});

router.get("/cart", isloggedin, (req, res) => {
  res.render("cart");
});

router.get("/profile", isloggedin,userprofile);


module.exports = router;