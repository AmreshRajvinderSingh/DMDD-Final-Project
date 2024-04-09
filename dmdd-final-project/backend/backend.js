const express = require('express');
const getDataRouter = require('./routes/getRoutes');
const postDataRouter = require('./routes/postRoutes');
const putDataRouter =require('./routes/putRoutes');
const sequelize = require('./databaseConnection/connection');
const dropDataRouter=require('./routes/deleteRoutes')
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins (replace with specific origin if needed)
app.use(cors());

// Mount the router on the '/api' path
app.use('/api', getDataRouter); // Use existing router for GET requests
app.use('/api', postDataRouter); // Use new router for POST requests
app.use('/api',putDataRouter);
app.use('/api',dropDataRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Sync all models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log('All models were synchronized successfully.');

    // Start the server after syncing models
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to sync models with the database:', error);
  }
})();

// Export the app instance for testing or integration purposes
module.exports = app;
