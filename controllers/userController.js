// acquire userModel 
const mongoose = require('mongoose');
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
     console.log(req.params.id);
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


module.exports.addcart = async (req, res) => {

 // finding the product id
  const product = await productModel.findOne({_id : req.params.id});

  // now finding the user 
  const user = await userModel.findOne({email : req.user.email});
 
  // find item is present or not
  const alreadyInCart = user.cart.includes(product._id);
  console.log(alreadyInCart);
  if(!alreadyInCart)
  {
    // push the product id into cart array
    user.cart.push(product._id);
    await user.save();
  }

  res.redirect("/users/shop");
};



module.exports.cart = async (req, res) => {
   
     // finding the login user
     const useremail = req.user.email;
     
     const user = await userModel.findOne({email : useremail}).populate("cart").exec();
     const cartitems = user.cart;

     // finding the total amount
     let totalamount = 0;
     cartitems.forEach((item)=>
    {
       totalamount+= item.price - eval(item.price*item.discount/100);
    });

    // calculate the total tax with 18% GST 
    let totaltax = totalamount*18/100;

     
  res.render("cart", {cartitems, totalamount, totaltax});
};


module.exports.removecart = async (req, res)=>
{
  // finding the product id
  const product = await productModel.findOne({ _id: req.params.id });

  // now finding the user
  const user = await userModel.findOneAndUpdate({ email: req.user.email }, {$pull: {cart :new mongoose.Types.ObjectId(product)}}, {new : true});
                                                             
  console.log(user);

  // push the product id into cart array
  // user.cart.pop(product._id);
  await user.save();

  res.redirect("/users/cart");
};