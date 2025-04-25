const mongoose = require('mongoose');
const config = require('config');
const debgr = require('debug')("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/solemate`)
  .then(function () {
    debgr("Mongoose Connected");
  })
  .catch(function (err) {
    debgr(err);
  });

module.exports = mongoose.connection;