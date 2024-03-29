const { sequelize, testConnection } = require('./connection');
const express = require('express');
const app = express();



const PORT = process.env.PORT || 3000;

// Sync all models with the database
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to sync models with the database:', error);
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});