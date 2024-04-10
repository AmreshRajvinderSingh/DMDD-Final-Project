--A view to display current stock levels for each product, including the product name and category.
CREATE VIEW ProductStockView AS
SELECT 
    p.Product_ID,
    p.Name AS ProductName,
    c.Name AS CategoryName,
    s.Quantity AS StockQuantity
FROM Stock s
JOIN Product p ON s.ProductID = p.Product_ID
JOIN Category c ON p.CategoryID = c.CategoryID;


--Query execute the Product Stock View
Select * from ProductStockView;

--A view to provide a history of orders for each customer, including order details and total spend per order.
CREATE VIEW CustomerOrderHistoryView AS
SELECT 
    c.CustomerID,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    o.OrderID,
    o.OrderDate,
    SUM(od.Quantity * od.Price) AS OrderTotal
FROM Customer c
JOIN Orders o ON c.CustomerID = o.CustomerID
JOIN Order_Details od ON o.OrderID = od.OrderID
GROUP BY c.CustomerID, c.FirstName, c.LastName, o.OrderID, o.OrderDate;

--Query execute the Customer Order History View
Select * from CustomerOrderHistoryView;



--A view that displays the total sales for each product, including the total quantity sold and total revenue generated.
CREATE VIEW ProductSalesView AS
SELECT 
    p.Product_ID,
    p.Name AS ProductName,
    SUM(od.Quantity) AS TotalQuantitySold,
    SUM(od.Quantity * od.Price) AS TotalRevenue
FROM Product p
JOIN Order_Details od ON p.Product_ID = od.ProductID
GROUP BY p.Product_ID, p.Name;

--Query execute the Product Sales View
Select * from ProductSalesView;




--A view that provides details on stock levels by warehouse, including product information.
CREATE VIEW WarehouseStockView AS
SELECT 
    w.WarehouseID,
    w.Location AS WarehouseLocation,
    p.Product_ID,
    p.Name AS ProductName,
    s.Quantity AS StockQuantity
FROM Warehouse w
JOIN Stock s ON w.WarehouseID = s.WarehouseID
JOIN Product p ON s.ProductID = p.Product_ID;

--Query execute the Warehouse Stock View
Select * from WarehouseStockView;



--A view to identify the top-selling products based on the total quantity sold.
CREATE VIEW TopSellingProductsView AS
SELECT 
    p.Product_ID,
    p.Name AS ProductName,
    SUM(od.Quantity) AS TotalQuantitySold
FROM Product p
JOIN Order_Details od ON p.Product_ID = od.ProductID
GROUP BY p.Product_ID, p.Name;

--Query execute the Top Selling Products View
SELECT *
FROM TopSellingProductsView
ORDER BY TotalQuantitySold DESC;



--A view that lists all orders that have not yet been shipped, showing order details and customer information.
CREATE VIEW PendingOrdersView AS
SELECT 
    o.OrderID,
    o.OrderDate,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    o.ShippingAddress,
    o.Status
FROM Orders o
JOIN Customer c ON o.CustomerID = c.CustomerID
WHERE o.Status = 'Processing' OR o.Status = 'In Transit';

--Query execute the Customer Pending Order View
Select * from PendingOrdersView;



--A view that summarizes sales by month, showing total revenue generated.
CREATE VIEW MonthlySalesSummaryView AS
SELECT 
    YEAR(SaleDate) AS SaleYear,
    MONTH(SaleDate) AS SaleMonth,
    SUM(QuantitySold * SellingPrice) AS TotalRevenue
FROM Sales
GROUP BY YEAR(SaleDate), MONTH(SaleDate);

--Execution of the Monthly Sales Summary View
SELECT *
FROM MonthlySalesSummaryView
ORDER BY SaleYear, SaleMonth;




--A view to evaluate the profitability of each product, considering the cost of goods sold and total sales revenue.
CREATE VIEW ProductProfitabilityView AS
SELECT 
    p.Product_ID,
    p.Name AS ProductName,
    SUM(od.Quantity * od.Price) AS TotalRevenue,
    SUM(od.Quantity * od.Cost) AS TotalCost,
    SUM(od.Quantity * od.Price) - SUM(od.Quantity * od.Cost) AS GrossProfit
FROM 
    (SELECT 
        OrderID,
        ProductID,
        Quantity,
        Price,
        (SELECT Price FROM Product WHERE Product_ID = Order_Details.ProductID) AS Cost
     FROM Order_Details) od
JOIN Product p ON od.ProductID = p.Product_ID
GROUP BY p.Product_ID, p.Name;

--To execute the view for product profitability
SELECT *
FROM ProductProfitabilityView;



--A view that breaks down sales revenue by product category, useful for identifying which categories are most lucrative.
CREATE VIEW SalesByCategoryView AS
SELECT 
    c.CategoryID,
    c.Name AS CategoryName,
    SUM(od.Quantity * od.Price) AS TotalRevenue
FROM Order_Details od
JOIN Product p ON od.ProductID = p.Product_ID
JOIN Category c ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryID, c.Name;


--Query to execute the SalesCategoryView
Select * from SalesByCategoryView;


--A view for analyzing the year-over-year changes in profit and loss statements.
CREATE VIEW YearlyProfitLossView AS
SELECT 
    YEAR(PeriodStartDate) AS Year,
    SUM(TotalRevenue) AS AnnualRevenue,
    SUM(CostOfGoodsSold) AS AnnualCOGS,
    SUM(OperatingExpenses) AS AnnualOperatingExpenses,
    SUM(OtherIncome) AS AnnualOtherIncome,
    SUM(OtherExpenses) AS AnnualOtherExpenses,
    SUM(NetProfit) AS AnnualNetProfit
FROM Profit_Loss
GROUP BY YEAR(PeriodStartDate);

--Query execute the Yearly Profit Loss View
Select * from YearlyProfitLossView;



