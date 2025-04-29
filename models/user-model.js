const mongoose = require('mongoose');

// Define the Address schema
const AddressSchema = mongoose.Schema({
  
  street: String,
  city: String,
  state: String,
  pinCode: String
});

// create user schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
  },
  userimage: {
    type: String,
  },

  order: {
    type: Array,
    default: [],
  },
  cart: {
    type: Array,
    default: [],
  },
  useraddress: {
    type: AddressSchema,
  }
});

module.exports = mongoose.model('user', userSchema);