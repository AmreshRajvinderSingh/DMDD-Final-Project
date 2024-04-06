var DataTypes = require("sequelize").DataTypes;
var _Address = require("./Address");
var _Addresses = require("./Addresses");
var _Categories = require("./Categories");
var _Category = require("./Category");
var _Customer = require("./Customer");
var _Customers = require("./Customers");
var _Employee = require("./Employee");
var _Employees = require("./Employees");
var _Order_Details = require("./Order_Details");
var _Orders = require("./Orders");
var _Product = require("./Product");
var _Product_Supplier = require("./Product_Supplier");
var _Product_Suppliers = require("./Product_Suppliers");
var _Products = require("./Products");
var _Profit_Loss = require("./Profit_Loss");
var _Purchase_Order = require("./Purchase_Order");
var _Purchase_Order_Detail = require("./Purchase_Order_Detail");
var _Purchase_Order_Details = require("./Purchase_Order_Details");
var _Purchase_Orders = require("./Purchase_Orders");
var _Sales = require("./Sales");
var _Shipment = require("./Shipment");
var _Stock = require("./Stock");
var _Stocks = require("./Stocks");
var _Supplier = require("./Supplier");
var _Suppliers = require("./Suppliers");
var _Warehouse = require("./Warehouse");
var _Warehouses = require("./Warehouses");

function initModels(sequelize) {
  var Address =new _Address(sequelize, DataTypes);
  var Addresses = new _Addresses(sequelize, DataTypes);
  var Categories = new _Categories(sequelize, DataTypes);
  var Category =new  _Category(sequelize, DataTypes);
  var Customer = new _Customer(sequelize, DataTypes);
  var Customers =new  _Customers(sequelize, DataTypes);
  var Employee = new _Employee(sequelize, DataTypes);
  var Employees = new _Employees(sequelize, DataTypes);
  var Order_Details =new  _Order_Details(sequelize, DataTypes);
  var Orders =new  _Orders(sequelize, DataTypes);
  var Product =new  _Product(sequelize, DataTypes);
  var Product_Supplier =new  _Product_Supplier(sequelize, DataTypes);
  var Product_Suppliers =new  _Product_Suppliers(sequelize, DataTypes);
  var Products = new _Products(sequelize, DataTypes);
  var Profit_Loss =new  _Profit_Loss(sequelize, DataTypes);
  var Purchase_Order =new  _Purchase_Order(sequelize, DataTypes);
  var Purchase_Order_Detail =new  _Purchase_Order_Detail(sequelize, DataTypes);
  var Purchase_Order_Details =new  _Purchase_Order_Details(sequelize, DataTypes);
  var Purchase_Orders =new  _Purchase_Orders(sequelize, DataTypes);
  var Sales =new  _Sales(sequelize, DataTypes);
  var Shipment =new  _Shipment(sequelize, DataTypes);
  var Stock = new _Stock(sequelize, DataTypes);
  var Stocks =new  _Stocks(sequelize, DataTypes);
  var Supplier =new  _Supplier(sequelize, DataTypes);
  var Suppliers =new _Suppliers(sequelize, DataTypes);
  var Warehouse =new  _Warehouse(sequelize, DataTypes);
  var Warehouses =new  _Warehouses(sequelize, DataTypes);

  Products.belongsTo(Categories, { as: "Category", foreignKey: "CategoryID"});
  Categories.hasMany(Products, { as: "Products", foreignKey: "CategoryID"});
  Product.belongsTo(Category, { as: "Category", foreignKey: "CategoryID"});
  Category.hasMany(Product, { as: "Products", foreignKey: "CategoryID"});
  Orders.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerID"});
  Customer.hasMany(Orders, { as: "Orders", foreignKey: "CustomerID"});
  Orders.belongsTo(Employee, { as: "Employee", foreignKey: "EmployeeID"});
  Employee.hasMany(Orders, { as: "Orders", foreignKey: "EmployeeID"});
  Order_Details.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(Order_Details, { as: "Order_Details", foreignKey: "OrderID"});
  Sales.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(Sales, { as: "Sales", foreignKey: "OrderID"});
  Shipment.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(Shipment, { as: "Shipments", foreignKey: "OrderID"});
  Order_Details.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(Order_Details, { as: "Order_Details", foreignKey: "ProductID"});
  Product_Supplier.belongsTo(Product, { as: "Product", foreignKey: "Product_ID"});
  Product.hasMany(Product_Supplier, { as: "Product_Suppliers", foreignKey: "Product_ID"});
  Purchase_Order_Detail.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(Purchase_Order_Detail, { as: "Purchase_Order_Details", foreignKey: "ProductID"});
  Sales.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(Sales, { as: "Sales", foreignKey: "ProductID"});
  Stock.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(Stock, { as: "Stocks", foreignKey: "ProductID"});
  Product_Suppliers.belongsTo(Products, { as: "Product", foreignKey: "Product_ID"});
  Products.hasMany(Product_Suppliers, { as: "Product_Suppliers", foreignKey: "Product_ID"});
  Purchase_Order_Details.belongsTo(Products, { as: "Product", foreignKey: "Product_ID"});
  Products.hasMany(Purchase_Order_Details, { as: "Purchase_Order_Details", foreignKey: "Product_ID"});
  Purchase_Order_Detail.belongsTo(Purchase_Order, { as: "PurchaseOrder", foreignKey: "PurchaseOrderID"});
  Purchase_Order.hasMany(Purchase_Order_Detail, { as: "Purchase_Order_Details", foreignKey: "PurchaseOrderID"});
  Purchase_Order_Details.belongsTo(Purchase_Orders, { as: "PurchaseOrder", foreignKey: "PurchaseOrderID"});
  Purchase_Orders.hasMany(Purchase_Order_Details, { as: "Purchase_Order_Details", foreignKey: "PurchaseOrderID"});
  Product_Supplier.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(Product_Supplier, { as: "Product_Suppliers", foreignKey: "SupplierID"});
  Purchase_Order.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(Purchase_Order, { as: "Purchase_Orders", foreignKey: "SupplierID"});
  Product_Suppliers.belongsTo(Suppliers, { as: "Supplier", foreignKey: "SupplierID"});
  Suppliers.hasMany(Product_Suppliers, { as: "Product_Suppliers", foreignKey: "SupplierID"});
  Purchase_Orders.belongsTo(Suppliers, { as: "Supplier", foreignKey: "SupplierID"});
  Suppliers.hasMany(Purchase_Orders, { as: "Purchase_Orders", foreignKey: "SupplierID"});
  Stock.belongsTo(Warehouse, { as: "Warehouse", foreignKey: "WarehouseID"});
  Warehouse.hasMany(Stock, { as: "Stocks", foreignKey: "WarehouseID"});

  return {
    Address,
    Addresses,
    Categories,
    Category,
    Customer,
    Customers,
    Employee,
    Employees,
    Order_Details,
    Orders,
    Product,
    Product_Supplier,
    Product_Suppliers,
    Products,
    Profit_Loss,
    Purchase_Order,
    Purchase_Order_Detail,
    Purchase_Order_Details,
    Purchase_Orders,
    Sales,
    Shipment,
    Stock,
    Stocks,
    Supplier,
    Suppliers,
    Warehouse,
    Warehouses,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
