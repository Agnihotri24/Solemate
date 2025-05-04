const ownerModel = require("../models/owner-model");
const productModel = require("../models/product-model");


module.exports.admin = (req, res) => {
  res.render("admin");
};


module.exports.admincreateproduct = (req, res) => {
  res.render("createproduct");
};


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
    const { name, brand, price, description, discount } = req.body;
      const productimage = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    const newProduct = await productModel.create({
      productname : name,
      price,
      productimage,
      discount,
      brand,
      productdescription: description,
     
    });

    res.send("Product created successfully!");
    res.render("/admin/create/product");
  } 

  catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
