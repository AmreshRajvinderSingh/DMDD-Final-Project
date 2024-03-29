const { Sequelize } = require('sequelize');

require('dotenv').config();

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Port where your MSSQL Docker container is exposed
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // For Azure SQL Database
    },
  },
});

async function testConnection() {
  try {

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:');
    console.log(process.env.DB_HOST);

  }
}

module.exports = { sequelize, testConnection };
