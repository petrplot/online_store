const { ProductCategories } = require('../models/ProductCategory');
const { remove, getAll, create, update, getById } = require('../services/categoryService');


module.exports.getByIdCategory = async (req, res) => {
  try {

    const category = await getById(req, ProductCategories);

    return res.json(category);

  } catch (error) {
    console.log(error);
  }
};

module.exports.getAllCategories = async (req, res) => {
  try {

    const categories =  await getAll(ProductCategories);

    return res.json(categories);

  } catch (error) {
    console.log(error);
  }
};

module.exports.createCategory = async (req, res) => {
  try {

    const data = {
      nameCategory: req.body.nameCategory
    };

    const category = await create(data, ProductCategories);

    return res.json(category);

  } catch (error) {
    console.log(error);
  }
};

module.exports.removeCategory = async (req, res) => {
  try {

    const { code, message } = await remove(req, ProductCategories);

    res.status(code).json(message);

  } catch (error) {
    console.log(error);
  }
};

module.exports.updateCategory = async (req, res) => {
  try {

    const data = {
      nameCategory: req.body.nameCategory
    };
    const { id } = req.params;

    const category = await update(id, data, ProductCategories);

    return res.json(category);

  } catch (error) {
    console.log(error);
  }
};
