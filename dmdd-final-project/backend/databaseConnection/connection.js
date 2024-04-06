const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
  define: {
    timestamps: false, // Disable timestamps for all models
    underscored: true // Use snake_case for column names
  }
});

module.exports = sequelize;