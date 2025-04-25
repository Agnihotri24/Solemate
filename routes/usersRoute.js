const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>
{
    res.send("Yeah You are at users Route ")
})

module.exports = router;