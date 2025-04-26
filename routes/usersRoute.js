const express = require('express');
const router = express.Router();

const {registerUser, loginUser, logoutUser} = require('../controllers/authController');

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


module.exports = router;