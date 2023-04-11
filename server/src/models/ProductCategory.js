const { DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db.js')
const { Product } = require('./Product.js')

class ProductCategories extends Model {}

ProductCategories.init(
    {
        id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        nameCategory:{type:DataTypes.STRING, allowNull:false,field:'name_category'},
        category:DataTypes.STRING //!!!нужно подумать о необходимости даного поля
    },
    {
        sequelize,
        modelName: 'product_categories',
    }
)

ProductCategories.hasMany(Product)

module.exports = {ProductCategories}