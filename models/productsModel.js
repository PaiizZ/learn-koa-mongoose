const mongoose = require('mongoose')

var ProductsSchema = new mongoose.Schema({
  name: String,
  price: String
})

module.exports = mongoose.model('products', ProductsSchema)