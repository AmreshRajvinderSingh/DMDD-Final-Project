// Import required modules
const { DataTypes } = require("sequelize");
const sequelize = require("../databaseConnection/connection");

const Warehouse = sequelize.define("Warehouse", {
  WarehouseID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Location: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  City: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

const Category = sequelize.define("Category", {
  CategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
  },
});

const Supplier = sequelize.define("Supplier", {
  SupplierID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CompanyName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ContactName: {
    type: DataTypes.STRING(255),
  },
  Address: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  City: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING(50),
  },
  Email: {
    type: DataTypes.STRING(100),
  },
});

const Employee = sequelize.define("Employee", {
  EmployeeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  FirstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(100),
  },
  Phone: {
    type: DataTypes.STRING(50),
  },
  Position: {
    type: DataTypes.STRING(50),
  },
  Department: {
    type: DataTypes.STRING(50),
  },
});

const Customer = sequelize.define("Customer", {
  CustomerID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  FirstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(100),
  },
  Phone: {
    type: DataTypes.STRING(50),
  },
  Address: {
    type: DataTypes.STRING(255),
  },
  City: {
    type: DataTypes.STRING(50),
  },
  Country: {
    type: DataTypes.STRING(50),
  },
});

const Address = sequelize.define("Address", {
  AddressID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CustomerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Street: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  City: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  State: {
    type: DataTypes.STRING(50),
  },
  ZipCode: {
    type: DataTypes.STRING(20),
  },
  Country: {
    type: DataTypes.STRING(100),
  },
});

const Stock = sequelize.define("Stock", {
  StockID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  WarehouseID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Product = sequelize.define("Product", {
  Product_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CategoryID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

const Product_Supplier = sequelize.define("Product_Supplier", {
  Product_Supplier_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Product_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SupplierID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Purchase_Order = sequelize.define("Purchase_Order", {
  PurchaseOrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  SupplierID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  OrderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Status: {
    type: DataTypes.STRING(50),
  },
});

const Purchase_Order_Detail = sequelize.define("Purchase_Order_Detail", {
  Purchase_Order_DetailID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  PurchaseOrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

const Orders = sequelize.define("Orders", {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CustomerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  EmployeeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  OrderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ShipDate: {
    type: DataTypes.DATE,
  },
  ShippingAddress: {
    type: DataTypes.STRING(255),
  },
  Status: {
    type: DataTypes.STRING(50),
  },
});

const Order_Details = sequelize.define("Order_Details", {
  OrderDetailID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

const Shipment = sequelize.define("Shipment", {
  ShipmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ShippedDate: {
    type: DataTypes.DATE,
  },
  EstimatedArrivalDate: {
    type: DataTypes.DATE,
  },
  Carrier: {
    type: DataTypes.STRING(255),
  },
  TrackingNumber: {
    type: DataTypes.STRING(100),
  },
  Status: {
    type: DataTypes.STRING(50),
  },
});

const Sales = sequelize.define("Sales", {
  SaleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  QuantitySold: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SellingPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  SaleDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const Profit_Loss = sequelize.define("Profit_Loss", {
  PnLID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  PeriodStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  PeriodEndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  TotalRevenue: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  CostOfGoodsSold: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  OperatingExpenses: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  OtherIncome: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0.0,
  },
  OtherExpenses: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0.0,
  },
  NetProfit: {
    type: DataTypes.VIRTUAL,
    get() {
      return (
        this.TotalRevenue -
        this.CostOfGoodsSold -
        this.OperatingExpenses +
        this.OtherIncome -
        this.OtherExpenses
      );
    },
  },
});

module.exports = {
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
  Profit_Loss,
};
