// acquire userModel 
const userModel = require('../models/user-model');

module.exports.userprofile =  async(req, res) => {

    // finding the login user by req.user through Middleware
   try{
    const user = await userModel.findOne({email : req.user.email});
     
    // render the profile page with user information

  res.render("profile", {user});
   }
   catch(err)
   {
    console.log(err.message);
   }
};
