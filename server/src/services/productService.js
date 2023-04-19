const { Product } = require("../models/Product")

class ProductService {

    async getAll(req,res){

        const products = []
        products = await Product.findAll()
        return products

    }
}

module.exports = new ProductService()