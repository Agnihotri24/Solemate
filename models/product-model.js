const mongoose = require('mongoose');

// creating productSchema

productSchema = mongoose.Schema({
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
  productimage: {
    data: Buffer,
    contentType: String,
  },
  productname: {
    type: String,
  },
  productdescription: {
    type: String,
  },
  brand: String,
});

module.exports = mongoose.model('product', productSchema);