const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models'); 
const sequelize = require('../databaseConnection/connection'); 
const {     
  Warehouse,
  Category,
  Supplier,
  Employee,
  Customer,
  Address,
  Stock,
  Product,
  Product_Supplier,
  Purchase_Order,
  Purchase_Order_Detail,
  Orders,
  Order_Details,
  Shipment,
  Sales,
  Profit_Loss,} = require('../models/init-models');
// Call initModels function to initialize models
const models = initModels(sequelize);



const deleteProfitLossRecord = async (req, res) => {
    const { PnLID } = req.body; // Extract PnLID from request parameters
  
    try {
      // Attempt to find the Profit_Loss record by PnLID
      const profitLossRecord = await models.Profit_Loss.findByPk(PnLID);
  
      if (!profitLossRecord) {
        return res.status(404).json({ error: 'Profit Loss record not found' });
      }
  
      // Delete the Profit_Loss record
      await profitLossRecord.destroy();
  
      // Respond with success message
      res.status(200).json({ message: `Profit Loss record with PnLID ${PnLID} deleted successfully` });
    } catch (error) {
      console.error('Error deleting Profit Loss record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports={
    deleteProfitLossRecord
  }
