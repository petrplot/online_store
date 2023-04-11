const { DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db.js')

class Product extends Model {}

Product.init(
    {
        id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        nameProduct:{type:DataTypes.STRING(), allowNull:false, field:'name_product'},
        linkToImage:{type:DataTypes.STRING(1024), field:'link_to_image'},
        productDescription:{type:DataTypes.STRING(1024), field:'product_description'},
        priceProduct:{type:DataTypes.STRING(), allowNull:false, field:'price_product'}
    },
    {
        sequelize,
        modelName: 'products',
    }
)

module.exports = {Product}