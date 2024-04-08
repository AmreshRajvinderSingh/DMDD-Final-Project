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





const updateProduct = async (req, res) => {
    try {
      const { Product_ID, Name, Description, Price } = req.body; // Extract fields from request body
  
      // Validate required fields
      if (!Product_ID) {
        return res.status(400).json({ error: 'Product_ID is required for update' });
      }
  
      // Find the product by Product_ID
      const product = await models.Product.findByPk(Product_ID);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Update the product with new values (if provided)
      if (Name !== undefined) {
        product.Name = Name;
      }
      if (Description !== undefined) { // Allow Description to be set to empty string ('')
        product.Description = Description;
      }
      if (Price !== undefined) {
        product.Price = Price;
      }
  
      // Save the updated product
      await product.save();
  
      res.status(200).json(product); // Respond with the updated product
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const updateSupplier = async (req, res) => {
    try {
      const { SupplierID, CompanyName, ContactName, Address, City, Country, Phone, Email } = req.body; // Extract fields from request body
  
      // Validate required fields
      if (!SupplierID) {
        return res.status(400).json({ error: 'SupplierID is required for update' });
      }
  
      // Find the supplier by SupplierID
      const supplier = await models.Supplier.findByPk(SupplierID);
  
      if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
      }
  
      // Update the supplier with new values (if provided)
      if (CompanyName !== undefined) {
        supplier.CompanyName = CompanyName;
      }
      if (ContactName !== undefined) {
        supplier.ContactName = ContactName;
      }
      if (Address !== undefined) {
        supplier.Address = Address;
      }
      if (City !== undefined) {
        supplier.City = City;
      }
      if (Country !== undefined) {
        supplier.Country = Country;
      }
      if (Phone !== undefined) {
        supplier.Phone = Phone;
      }
      if (Email !== undefined) {
        supplier.Email = Email;
      }
  
    
      await supplier.save();
  
      res.status(200).json(supplier); 
    } catch (error) {
      console.error('Error updating supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const updateOrder = async (req, res) => {
    try {
      const { OrderID, OrderDate, ShipDate, ShippingAddress, Status } = req.body; 
  
  
      if (!OrderID) {
        return res.status(400).json({ error: 'OrderID is required for update' });
      }
  
      // Find the order by OrderID
      const order = await models.Orders.findByPk(OrderID);
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      // Update the order with new values (if provided)
      if (OrderDate) {
        order.OrderDate = OrderDate;
      }
      if (ShipDate !== undefined) {
        order.ShipDate = ShipDate;
      }
      if (ShippingAddress !== undefined) {
        order.ShippingAddress = ShippingAddress;
      }
      if (Status !== undefined) {
        order.Status = Status;
      }
  
      // Save the updated order
      await order.save();
  
      res.status(200).json(order); // Respond with the updated order
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  

  const updateShipment = async (req, res) => {
    try {
      const { ShipmentID, ShippedDate, EstimatedArrivalDate, Carrier, TrackingNumber, Status } = req.body; // Extract fields from request body
  
      // Validate required fields
      if (!ShipmentID) {
        return res.status(400).json({ error: 'ShipmentID is required for update' });
      }
  
      // Find the shipment by ShipmentID
      const shipment = await models.Shipment.findByPk(ShipmentID);
  
      if (!shipment) {
        return res.status(404).json({ error: 'Shipment not found' });
      }
  
      // Update the shipment with new values (if provided)
      if (ShippedDate) {
        shipment.ShippedDate = ShippedDate;
      }
      if (EstimatedArrivalDate !== undefined) {
        shipment.EstimatedArrivalDate = EstimatedArrivalDate;
      }
      if (Carrier !== undefined) {
        shipment.Carrier = Carrier;
      }
      if (TrackingNumber !== undefined) {
        shipment.TrackingNumber = TrackingNumber;
      }
      if (Status !== undefined) {
        shipment.Status = Status;
      }
  
      // Save the updated shipment
      await shipment.save();
  
      res.status(200).json(shipment); // Respond with the updated shipment
    } catch (error) {
      console.error('Error updating shipment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const updateWarehouse = async (req, res) => {
    try {
      const { WarehouseID, Location, Address, City, Country } = req.body; // Extract fields from request body
  
      // Validate required fields
      if (!WarehouseID) {
        return res.status(400).json({ error: 'WarehouseID is required for update' });
      }
  
      // Find the warehouse by WarehouseID
      const warehouse = await models.Warehouse.findByPk(WarehouseID);
  
      if (!warehouse) {
        return res.status(404).json({ error: 'Warehouse not found' });
      }
  
      // Update the warehouse with new values (if provided)
      if (Location) {
        warehouse.Location = Location;
      }
      if (Address) {
        warehouse.Address = Address;
      }
      if (City) {
        warehouse.City = City;
      }
      if (Country) {
        warehouse.Country = Country;
      }
  
      // Save the updated warehouse
      await warehouse.save();
  
      res.status(200).json(warehouse); // Respond with the updated warehouse
    } catch (error) {
      console.error('Error updating warehouse:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  

  



  module.exports = {
    updateProduct,
    updateSupplier,
    updateOrder,
    updateShipment,
    updateWarehouse
  };
  