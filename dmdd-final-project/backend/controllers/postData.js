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

const createAddress = async (req, res) => {
    const { CustomerID, Street, City, State, ZipCode, Country } = req.body;
  
    // Validate required fields
    if (!CustomerID || !Street || !City || !Country) {
      return res.status(400).json({ error: 'CustomerID, Street, City, and Country are required fields' });
    }
  
    try {
      let address = await models.Address.findOne({ where: { CustomerID } });
  
      if (!address) {
        // Create a new address if none exists for the CustomerID
        address = await models.Address.create({ CustomerID, Street, City, State, ZipCode, Country });
        return res.status(201).json({ message: 'Address created successfully', data: address });
      }
  
      // Update the existing address with provided values (if they are not empty or null)
      if (Street) address.Street = Street;
      if (City) address.City = City;
      if (State) address.State = State;
      if (ZipCode) address.ZipCode = ZipCode;
      if (Country) address.Country = Country;
  
      await address.save(); // Save the updated address
      res.status(200).json({ message: 'Address updated successfully', data: address });
    } catch (error) {
      console.error('Error creating or updating address:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const createWarehouse = async (req, res) => {
    try {
      const { WarehouseID, Location, Address, City, Country } = req.body;
  
      if (!WarehouseID || !Location || !Address || !City || !Country) {
        return res.status(400).json({ error: 'WarehouseID, Location, Address, City, and Country are required fields' });
      }
  
      const newWarehouse = await models.Warehouse.create({
        WarehouseID,
        Location,
        Address,
        City,
        Country
      });
  
      res.status(201).json(newWarehouse);
    } catch (error) {
      console.error('Error creating warehouse:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
// Import your Sequelize models

  const createCustomer = async (req, res) => {
    try {
      const { CustomerID, FirstName, LastName, Email, Phone, Address, City, Country } = req.body;
  
      // Validate required fields
      if (!FirstName || !LastName) {
        return res.status(400).json({ error: 'First Name and Last Name are required fields' });
      }
  
      // Create a new customer record
      const newCustomer = await models.Customer.create({
        CustomerID,
        FirstName,
        LastName,
        Email,
        Phone,
        Address,
        City,
        Country
      });
  
      res.status(201).json(newCustomer); // Respond with the created customer
    } catch (error) {
      console.error('Error creating customer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  
  
  


const createEmployee = async (req, res) => {
  try {
    const { EmployeeID,FirstName, LastName, Email, Phone, Position, Department } = req.body;

    // Create a new employee record
    const newEmployee = await models.Employee.create({
      EmployeeID,
      FirstName,
      LastName,
      Email,
      Phone,
      Position,
      Department
    });

    res.status(201).json(newEmployee); // Respond with the created employee
  } catch (error) {
    
      if (error.name === 'SequelizeUniqueConstraintError' && error.fields && error.fields.PK__Employee__7AD04FF1BA830854) {
        
        return res.status(400).json({ error: 'EmployeeID already exists', errorCode: 'EMPLOYEE_ID_EXISTS' });
      }
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const createOrderDetail = async (req, res) => {
    try {
      const { OrderDetailID, OrderID, ProductID, Quantity, Price } = req.body;
  
      
      const newOrderDetail = await models.Order_Details.create({
        OrderDetailID,
        OrderID,
        ProductID,
        Quantity,
        Price
      });
  
      res.status(201).json(newOrderDetail); // Respond with the created Order_Detail
    } catch (error) {
      console.error('Error creating Order_Detail:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const createOrder = async (req, res) => {
    try {
      const { OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status } = req.body;
  
      // Validate required fields
      if (!CustomerID || !EmployeeID || !OrderDate) {
        return res.status(400).json({ error: 'CustomerID, EmployeeID, and OrderDate are required fields' });
      }
  
      // Create a new Orders record
      const newOrder = await models.Orders.create({
        OrderID,
        CustomerID,
        EmployeeID,
        OrderDate,
        ShipDate,
        ShippingAddress,
        Status
      });
  
      res.status(201).json(newOrder); // Respond with the created Orders
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError' && error.fields && error.fields.PK__Orders__C3905BAF4FB928EE) {
        // OrderID already exists
        return res.status(400).json({ error: `Order with OrderID already exists`, errorCode: 'ORDER_ID_EXISTS' });
      }
      console.error('Error creating Orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

const createProductSupplier = async (req, res) => {
    try {
      const { Product_Supplier_ID, Product_ID, SupplierID } = req.body;
  
      // Create a new Product_Supplier record
      const newProductSupplier = await models.Product_Supplier.create({
        Product_Supplier_ID,
        Product_ID,
        SupplierID
      });
  
      res.status(201).json(newProductSupplier); // Respond with the created Product_Supplier
    } catch (error) {
      console.error('Error creating Product_Supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const createProduct = async (req, res) => {
    try {
      const { Product_ID, CategoryID, Name, Description, Price } = req.body;
  
      // Validate required fields
      if (!Product_ID || !CategoryID || !Name || !Price) {
        return res.status(400).json({ error: 'Product_ID, CategoryID, Name, and Price are required fields' });
      }
  
      // Create a new product record
      const newProduct = await models.Product.create({
        Product_ID,
        CategoryID,
        Name,
        Description,
        Price
      });
  
      res.status(201).json(newProduct); // Respond with the created product
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError' && error.fields && error.fields.PK__Product__9834FB9A5C628DCB) {
        return res.status(400).json({ error: `Product with Product_ID  already exists`, errorCode: 'PRODUCT_ID_EXISTS' });
      }
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  

  const createPurchaseOrderDetail = async (req, res) => {
    try {
      const { PurchaseOrderID, ProductID, Quantity, Price } = req.body;
  
      // Create a new Purchase_Order_Detail record
      const newPurchaseOrderDetail = await models.Purchase_Order_Detail.create({
        PurchaseOrderID,
        ProductID,
        Quantity,
        Price
      });
  
      res.status(201).json(newPurchaseOrderDetail); // Respond with the created Purchase_Order_Detail
    } catch (error) {
      console.error('Error creating Purchase_Order_Detail:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const createPurchaseOrder = async (req, res) => {
    try {
      const { SupplierID, OrderDate, Status } = req.body;
  
      // Create a new purchase order record
      const newPurchaseOrder = await models.Purchase_Order.create({
        SupplierID,
        OrderDate,
        Status
      });
  
      res.status(201).json(newPurchaseOrder); // Respond with the created purchase order
    } catch (error) {
      console.error('Error creating purchase order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const createShipment = async (req, res) => {
    try {
      const { ShipmentID, OrderID, ShippedDate, EstimatedArrivalDate, Carrier, TrackingNumber, Status } = req.body;
  
      // Create a new shipment record
      const newShipment = await models.Shipment.create({
        ShipmentID,
        OrderID,
        ShippedDate,
        EstimatedArrivalDate,
        Carrier,
        TrackingNumber,
        Status
      });
  
      res.status(201).json(newShipment); // Respond with the created shipment
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError' && error.fields && error.fields.PK__Shipment__5CAD378DB380239B) {
        
        return res.status(400).json({ error: 'ShipmentID already exists', errorCode: 'SHIPMENT_ID_EXISTS' });
      }
      console.error('Error creating shipment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const createStockEntry = async (req, res) => {
    try {
      const { ProductID, WarehouseID, Quantity } = req.body;
  
      // Create a new stock entry
      const newStockEntry = await models.Stock.create({
        ProductID,
        WarehouseID,
        Quantity
      });
  
      res.status(201).json(newStockEntry); // Respond with the created stock entry
    } catch (error) {
      console.error('Error creating stock entry:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const createSupplier = async (req, res) => {
    try {
      const { SupplierID,CompanyName, ContactName, Address, City, Country, Phone, Email } = req.body;
  
      // Create a new supplier record
      const newSupplier = await models.Supplier.create({
        SupplierID,
        CompanyName,
        ContactName,
        Address,
        City,
        Country,
        Phone,
        Email
      });
  
      res.status(201).json(newSupplier); // Respond with the created supplier
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError' && error.fields && error.fields.PK__Supplier__4BE66694301EFBDF) {
        // SupplierID already exists
        return res.status(400).json({ error: 'SupplierID already exists', errorCode: 'SUPPLIER_ID_EXISTS' });
      }
      console.error('Error creating supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };  

  const createCategory = async (req, res) => {
    try {
      const { Name, Description } = req.body;
  
      // Create a new category record
      const newCategory = await models.Category.create({
        Name,
        Description
      });
  
      res.status(201).json(newCategory); // Respond with the created category
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  module.exports = {
    createAddress,
    createWarehouse,
    createCustomer,
    createEmployee,
    createOrderDetail,
    createOrder,
    createProductSupplier,
    createProduct,
    createPurchaseOrderDetail,
    createPurchaseOrder,
    createShipment,
    createStockEntry,
    createSupplier,
    createCategory,

  };
  
