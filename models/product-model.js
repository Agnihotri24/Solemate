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
        type : String,
    },
    productname : {
        type : String
    },
    productdescription : {
        type: String
    },
    panelcolor : String,
    bgcolor : String,
    textcolor : String

});

module.exports = mongoose.model('product', productSchema);