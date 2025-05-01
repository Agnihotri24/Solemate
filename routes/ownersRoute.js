const express = require("express");
const router = express.Router();


const { createAdmin } = require('../controllers/adminController');


if (process.env.NODE_ENV === "development") {
  router.post("/create", createadmin);
}


router.get("/admin", (req, res) => {res.render("admin");});


router.get("/admin/create/product", (req, res) => {res.render("createproduct");});




module.exports = router;
