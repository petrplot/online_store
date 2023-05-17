const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db.js');

class Token extends Model {}

Token.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  token: { type: DataTypes.STRING(1024), allowNull: false }
},
{
  sequelize,
  modelName: 'tokens',
});

module.exports = { Token };
