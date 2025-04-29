const ownerModel = require("../models/owner-model");
const productModel = require("../models/product-model");

const multer = require("multer");
const storage = multer.memoryStorage();

module.exports.createAdmin = async (req, res) => {
  let { name, email, password } = req.body;
     try{
  const owner = await ownerModel.find();
  // finding owner already exist or not
  if (owner.length > 1) return res.status(500).send("owner can't be create");

  // then craete owner
  const createowner = await ownerModel.create({
    name,
    email,
    password,
  });
  // sending response with status code
  res.status(200).send("owner has created");
}
catch(err)
{
  console.error(err.message);
  res.status(500).send("Server error");
}
};


module.exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, discount } = req.body;

    const newProduct = await productModel.create({
      productname : name,
      price,
      discount,
      productdescription: description,
      productImage: req.file.buffer, // because memory storage
    });

    res.send("Product created successfully!");
  } 

  catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
