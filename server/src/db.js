require('dotenv').config();
const { Sequelize } = require('sequelize');

const database = process.env.name_db;
const username = process.env.user_db;
const password = process.env.pass_db;


const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    dialect: 'mysql',
    timezone: '+00:00',
    define: {
      timestamps: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
    },
  }
);

module.exports = { sequelize };
