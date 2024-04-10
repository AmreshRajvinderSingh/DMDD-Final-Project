create database StockOptimate;
use StockOptimate;

CREATE TABLE Stock (
    StockID INT PRIMARY KEY,
    ProductID INT NOT NULL,
    WarehouseID INT NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Product(Product_ID),
    FOREIGN KEY (WarehouseID) REFERENCES Warehouse(WarehouseID)
);

CREATE TABLE Warehouse (
    WarehouseID INT PRIMARY KEY,
    Location VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(50) NOT NULL,
    Country VARCHAR(50) NOT NULL
);

CREATE TABLE Product (
    Product_ID INT PRIMARY KEY,
    CategoryID INT NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

CREATE TABLE Category (
    CategoryID INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

CREATE TABLE Product_Supplier (
    Product_Supplier_ID INT PRIMARY KEY,
    Product_ID INT NOT NULL,
    SupplierID INT NOT NULL,
    FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

CREATE TABLE Supplier (
    SupplierID INT PRIMARY KEY,
    CompanyName VARCHAR(255) NOT NULL,
    ContactName VARCHAR(255),
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(50) NOT NULL,
    Country VARCHAR(50) NOT NULL,
    Phone VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE Purchase_Order (
    PurchaseOrderID INT PRIMARY KEY,
    SupplierID INT NOT NULL,
    OrderDate DATE NOT NULL,
    Status VARCHAR(50),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

CREATE TABLE Purchase_Order_Detail (
    Purchase_Order_DetailID INT PRIMARY KEY,
    PurchaseOrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (PurchaseOrderID) REFERENCES Purchase_Order(PurchaseOrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(Product_ID)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT NOT NULL,
    EmployeeID INT NOT NULL,
    OrderDate DATE NOT NULL,
    ShipDate DATE,
    ShippingAddress VARCHAR(255),
    Status VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

CREATE TABLE Order_Details (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(Product_ID)
);

CREATE TABLE Shipment (
    ShipmentID INT PRIMARY KEY,
    OrderID INT NOT NULL,
    ShippedDate DATE,
    EstimatedArrivalDate DATE,
    Carrier VARCHAR(255),
    TrackingNumber VARCHAR(100),
    Status VARCHAR(50),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100),
    Phone VARCHAR(50),
    Position VARCHAR(50),
    Department VARCHAR(50)
);

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100),
    Phone VARCHAR(50),
    Address VARCHAR(255),
    City VARCHAR(50),
    Country VARCHAR(50)
);

CREATE TABLE [Address] (
    AddressID INT PRIMARY KEY,
    CustomerID INT NOT NULL,
    Street VARCHAR(255) NOT NULL,
    City VARCHAR(50) NOT NULL,
    State VARCHAR(50),
    ZipCode VARCHAR(20),
	Country VARCHAR(100)
);


CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    QuantitySold INT NOT NULL,
    SellingPrice DECIMAL(10, 2) NOT NULL,
    SaleDate DATE NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(Product_ID)
);

CREATE TABLE Profit_Loss (
    PnLID INT PRIMARY KEY,
    PeriodStartDate DATE NOT NULL,
    PeriodEndDate DATE NOT NULL,
    TotalRevenue DECIMAL(15, 2) NOT NULL,
    CostOfGoodsSold DECIMAL(15, 2) NOT NULL,
    OperatingExpenses DECIMAL(15, 2) NOT NULL,
    OtherIncome DECIMAL(15, 2) DEFAULT 0.00,
    OtherExpenses DECIMAL(15, 2) DEFAULT 0.00,
    NetProfit AS (TotalRevenue - CostOfGoodsSold - OperatingExpenses + OtherIncome - OtherExpenses) PERSISTED
);



Select * from Order_Details;
Select * from Orders;
Select * from Product;
Select * from Warehouse ;
Select * from Supplier; 
Select * from Product;
Select * from Customer;
Select * from Profit_Loss;