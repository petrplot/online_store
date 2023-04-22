const { ProductCategories } = require("../models/ProductCategory");
const { getAll } = require("../services/service");

module.exports.getByIdCategory = (req, res)=>{
    
}

module.exports.getAllCategories = async (req, res)=>{
    try {

        const categories =  await getAll(ProductCategories)
        return res.json(categories)

    } catch (error) {
        console.log(error);
    }
}

module.exports.createCategory = (req, res)=>{
    
}

module.exports.removeCategory = (req, res)=>{
    
}

module.exports.updateCategory = (req, res)=>{
    
}