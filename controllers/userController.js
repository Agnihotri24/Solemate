// acquire userModel 
const userModel = require('../models/user-model');
const productModel  = require('../models/product-model');

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

// product details controller
module.exports.productdetails = async(req, res) => {

  try{
  const product = await productModel.findOne({_id : req.params.id});
 
  res.render("productdetails", {product});
  }
  catch(err)
  {
    console.log(err.message);
  }
};

// shop constroller
module.exports.shop = async (req, res) => {

  try{
  const productitems = await productModel.find();
  
  res.render("shop", {productitems});
  }
  catch(err)
  {
    console.log(err.message);
  }
};


module.exports.cart = (req, res) => {
  res.render("cart");
};