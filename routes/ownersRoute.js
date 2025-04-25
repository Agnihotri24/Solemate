const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === 'development') {
    

  router.post('/create', async(req, res) => {

       let { name, email, password } = req.body;

       const owner = await ownerModel.find();
       // finding owner already exist or not
       if(owner.length > 1)   return res.status(500).send("owner can't be create");

       // then craete owner
       const createowner = await ownerModel.create({
        name,
        email,
        password
       });
       // sending response with status code
       res.status(200).send("owner has created");
  });
}


router.get('/', (req, res)=>
{
    res.send("Yeah You are at owners Route ")
})

module.exports = router;