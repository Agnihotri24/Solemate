const mongoose = require('mongoose');


// create user schema
const ownerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
 product :
 {
    type : Array,
    default : []
 },
 ownerimage : String,
 
 GSTno : String
});

module.exports = mongoose.model('owner', ownerSchema);