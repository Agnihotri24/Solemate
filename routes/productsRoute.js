const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>
{
    res.send("Yeah You are at products Route ")
})

module.exports = router;