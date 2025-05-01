const express = require("express");
const router = express.Router();

// all the auth controller
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

// all the user controller
const {
  userprofile,
  productdetails,
  shop,
  cart,
} = require("../controllers/userController");

// acquire middleware
const isloggedin = require("../middlewares/isloggedin");

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
router.get("/logout", logoutUser);

// All protected Route

router.get("/productdetails/:id", isloggedin, productdetails);

//router for shops
router.get("/shop", isloggedin, shop);

router.get("/cart", isloggedin, cart);

router.get("/profile", isloggedin, userprofile);

module.exports = router;
