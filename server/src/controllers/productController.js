const { Product } = require('../models/Product');
const { getAll, getById, create, update, remove } = require('../services/productService.js');

class ProductController {

  async getAllProducts(req, res) {
    try {

      const products =  await getAll(Product);
      return res.json(products);

    } catch (error) {
      console.log(error);
    }

  }

  async getByIdProduct(req, res) {
    try {

      const product = await getById(req, Product);
      return res.json(product);

    } catch (error) {
      console.log(error);
    }

  }

  async createProduct(req, res) {
    try {

      const data = {
        nameProduct: req.body.nameProduct,
        linkToImage: req.body.linkToImage,
        productDescription: req.body.productDescription,
        priceProduct: req.body.priceProduct
      };

      const product = await create(data, Product);

      return res.json(product);

    } catch (error) {
      console.log(error);
    }
  }

  async removeProduct(req, res) {
    try {

      const { code, message } = await remove(req, Product);

      return res.status(code).json(message);

    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(req, res) {
    try {

      const data = {
        nameProduct: req.body.nameProduct,
        linkToImage: req.body.linkToImage,
        productDescription: req.body.productDescription,
        priceProduct: req.body.priceProduct
      };
      const { id } = req.params; //как организовать проверку данных получаемых из req?

      const product = await update(id, data, Product);

      return res.json(product);

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProductController();
