const mongoose = require('mongoose');

// creating productSchema

productSchema = mongoose.Schema({
    price : {
        type : Number,

    },
    discount : {
        type : Number,
        default : 0
    },
    productimage : {
        type : Buffer
    },
    productname : {
        type : String
    },
    productdescription : {
        type: String
    },
    brand : String,


});

module.exports = mongoose.model('product', productSchema);