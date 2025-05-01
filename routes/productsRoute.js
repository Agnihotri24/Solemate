const express = require('express');
const router = express.Router();
const upload = require("../middlewares/upload"); 
const { createProduct } = require('../controllers/adminController');

router.get('/', (req, res)=>
{
    res.send("Yeah You are at products Route ")
})

router.post("/create", upload.single('productimage'), createProduct);

module.exports = router;