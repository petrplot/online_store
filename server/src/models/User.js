const { DataTypes, Model} = require('sequelize')
const { Token } = require('./Token.js')
const {sequelize} = require('../db.js')

class User extends Model {}

User.init(
    {
        id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        email: {type:DataTypes.STRING, unique:true, allowNull:false},
        password: {type:DataTypes.STRING, allowNull:false},
        userRights: {type:DataTypes.STRING, defaultValue:'USER', field:'user_rights'}//может быть USER или ADMIN
    },
    {   
        sequelize,
        modelName: 'users'
    }
)

User.hasOne(Token)

module.exports = {User}
