const productsModel = require('../models/productsModel')

class products {
  async getProduct () {
    return await productsModel.find()
  }
  async createProduct (productObj) {
    const product = new productsModel(productObj)
    return await product.save()
  }
}

module.exports = products