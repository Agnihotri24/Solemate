const express = require('express');
const router = express.Router();

const { createProduct } = require('../controllers/adminController');
const upload = require("../middlewares/upload");

router.get('/', (req, res)=>
{
    res.send("Yeah You are at products Route ")
})

router.post("/create", upload.single("image"), createProduct);

module.exports = router;