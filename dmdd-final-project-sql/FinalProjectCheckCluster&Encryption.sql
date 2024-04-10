--Check Constraint in Sales for Quantity Sold
ALTER TABLE Sales
ADD CONSTRAINT CHK_Sales_QuantitySold_Positive CHECK (QuantitySold > 0);
--Check Constraint in Sales for Selling Price
ALTER TABLE Sales
ADD CONSTRAINT CHK_Sales_SellingPrice_Positive CHECK (SellingPrice > 0);

--Check Constraint in Purchase_Order_Detail for Quantity
ALTER TABLE Purchase_Order_Detail
ADD CONSTRAINT CHK_Purchase_Order_Detail_Quantity_Positive CHECK (Quantity > 0);
--Check Constraint in Purchase_Order_Detail for Price
ALTER TABLE Purchase_Order_Detail
ADD CONSTRAINT CHK_Purchase_Order_Detail_Price_Positive CHECK (Price > 0);

--Check Constraint in Employee for Position
ALTER TABLE Employee
ADD CONSTRAINT CHK_Employee_Position_NotEmpty CHECK (Position <> '');

--Check Constraint in Customer for Country
ALTER TABLE Customer
ADD CONSTRAINT CHK_Customer_Country_NotEmpty CHECK (Country <> '');

----------------------------------------------------------------------------------------------------------------------------
--Non Clustered indexes

-- An index on the CategoryID column in the Product table.
CREATE NONCLUSTERED INDEX IDX_Product_CategoryID
ON Product (CategoryID);


--An index on the SaleDate can improve the performance of these queries.
CREATE NONCLUSTERED INDEX IDX_Sales_SaleDate
ON Sales (SaleDate);

--Looking up purchase orders by product ID
CREATE NONCLUSTERED INDEX IDX_Purchase_Order_Detail_ProductID
ON Purchase_Order_Detail (ProductID);

--Index for customer service or order tracking, queries may frequently filter by CustomerID and OrderDate.
CREATE NONCLUSTERED INDEX IDX_Orders_CustomerID_OrderDate
ON Orders (CustomerID, OrderDate);

--Managing stock levels 
CREATE NONCLUSTERED INDEX IDX_Stock_WarehouseID_ProductID
ON Stock (WarehouseID, ProductID);

Select * from Product


-----------------------------------------------------------------------------------------------------------------------------
-- Creating a Encypted columns to Employee and Customer to increase data confidentiality
ALTER TABLE Customer
ADD EncryptedPhone VARBINARY(MAX),
    EncryptedEmail VARBINARY(MAX);

ALTER TABLE Employee
ADD EncryptedPhone VARBINARY(MAX),
    EncryptedEmail VARBINARY(MAX);


-- Updating the Customer table
UPDATE Customer
SET
    EncryptedPhone = ENCRYPTBYPASSPHRASE('YourPassphrase', Phone),
    EncryptedEmail = ENCRYPTBYPASSPHRASE('YourPassphrase', Email);

-- Updating the Employee table
UPDATE Employee
SET
    EncryptedPhone = ENCRYPTBYPASSPHRASE('YourPassphrase', Phone),
    EncryptedEmail = ENCRYPTBYPASSPHRASE('YourPassphrase', Email);



 	Select * from Employee;
	Select * from Customer;