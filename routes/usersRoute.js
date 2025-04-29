const express = require('express');
const router = express.Router();

const {registerUser, loginUser, logoutUser} = require('../controllers/authController');
const isloggedin = require('../middlewares/isloggedin');

// defalut route for users
router.get("/", (req, res) => {
  res.send("Yeah You are at users Route ");
});


// regiser  route for users
router.post("/sign-up", registerUser);


// route for login
router.post("/sign-in", loginUser);


// logout route
router.get('/logout', logoutUser);

router.get('/productdetails', isloggedin,(req, res)=>{res.render("productdetails")})

//router for shops
router.get('/shop', isloggedin, (req, res)=>
{
  res.render("shop",);
});

router.get("/cart", isloggedin, (req, res) => {
  res.render("cart");
});

router.get("/profile", isloggedin, (req, res) => {
  res.render("profile");
});




module.exports = router;