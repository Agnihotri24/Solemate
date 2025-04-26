const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = async (req, res, next)=>{

    if(!req.cookies.token) 
    {
        res.send("login first");
        res.redirect("/");
    }

    try{

  let decode = jwt.verify(req.cookies.token,process.env.JWT_KEY);
  let user = userModel.findOne({email : decode.email}).select("-password");

  req.user = user;
  next();

  }
  catch(err){
    console.log(err.message);
  }
}
