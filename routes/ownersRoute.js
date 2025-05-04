const express = require("express");
const router = express.Router();

const {
  createAdmin,
  admin,
  admincreateproduct,
} = require("../controllers/adminController");


if (process.env.NODE_ENV === "development") {
  router.post("/create", createadmin);
}


router.get("/admin", admin);


router.get("/admin/create/product", admincreateproduct);


module.exports = router;
