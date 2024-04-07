const express = require('express');
const router = express.Router();
const { initModels } = require('../models/init-models'); // Import the initModels function

// Initialize Sequelize instance (assuming you have a sequelize instance)
const sequelize = require('../databaseConnection/connection'); // Assuming your sequelize instance is exported from a config file
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




  // const{Category}=require('../modles/init-models');
  // const { Category } = require('../modles/init-models');
  

  const getAllWarehouses = async (req, res) => {
    try {
      console.log('WareHouse model:', models.Warehouse);
      const warehouses = await models.Warehouse.findAll();
      res.status(200).json(warehouses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllCategories = async (req, res) => {
    try {
      console.log('Categories model:', models.Category);
      const categories = await models.Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllSuppliers = async (req, res) => {
    try {
      console.log('Suppliers model:', models.Supplier);
      const suppliers = await models.Supplier.findAll();
      res.status(200).json(suppliers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllEmployees = async (req, res) => {
    try {
      console.log('Employee model:', models.Employee);
      const employees = await models.Employee.findAll();
      res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllCustomers = async (req, res) => {
    try {
      console.log('Customer model:', models.Customer);
      const customers = await models.Customer.findAll();
      res.status(200).json(customers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllAddresses = async (req, res) => {
    try {
      console.log('Product model:', models.Address);
      const addresses = await models.Address.findAll();
      res.status(200).json(addresses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllStocks = async (req, res) => {
    try {
      console.log('Stocks model:', models.Stock);
      const stocks = await models.Stock.findAll();
      res.status(200).json(stocks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const getAllProducts = async (req, res) => {
    try {
      console.log('Product model:', models.Product); // Check if Product model is defined
      const products = await models.Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const getAllProductSuppliers = async (req, res) => {
    try {
      console.log('Product_Supplier model:', models.Product_Supplier);
      const productSuppliers = await models.Product_Supplier.findAll();
      res.status(200).json(productSuppliers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllPurchaseOrders = async (req, res) => {
    try {
      console.log('Purchase_Order model:', models.Purchase_Order);
      const purchaseOrders = await models.Purchase_Order.findAll();
      res.status(200).json(purchaseOrders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllPurchaseOrderDetails = async (req, res) => {
    try {
      console.log('Purchase_Order_Detail model:', models.Purchase_Order_Detail);
      const purchaseOrderDetails = await models.Purchase_Order_Detail.findAll();
      res.status(200).json(purchaseOrderDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllOrders = async (req, res) => {
    try {
      console.log('Product Orders:', models.Orders); 
      const orders = await models.Orders.findAll();
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllOrderDetails = async (req, res) => {
    try {
      console.log('Product Order_Details:', models.Order_Details); 
      const orderDetails = await models.Order_Details.findAll();
      res.status(200).json(orderDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllShipments = async (req, res) => {
    try {
      console.log('Product Shipment :', models.Shipment); 
      const shipments = await models.Shipment.findAll();
      res.status(200).json(shipments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllSales = async (req, res) => {
    try {
      console.log('Sales :', models.Sales); 
      const sales = await models.Sales.findAll();
      res.status(200).json(sales);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllProfitLosses = async (req, res) => {
    try {
      console.log('Profit_Loss :', models.Profit_Loss); 
      const profitLosses = await models.Profit_Loss.findAll();
      res.status(200).json(profitLosses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getAllWarehouses,
    getAllCategories,
    getAllSuppliers,
    getAllEmployees,
    getAllCustomers,
    getAllAddresses,
    getAllStocks,
    getAllProducts,
    getAllProductSuppliers,
    getAllPurchaseOrders,
    getAllPurchaseOrderDetails,
    getAllOrders,
    getAllOrderDetails,
    getAllShipments,
    getAllSales,
    getAllProfitLosses,
  };
  