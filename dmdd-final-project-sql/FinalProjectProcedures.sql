	
--Procedure for Updating Orders	
	CREATE PROCEDURE UpdateOrderAndDetails2
		@OrderID INT,
		@CustomerID INT,
		@EmployeeID INT,
		@OrderDate DATE,
		@ShipDate DATE,
		@ShippingAddress VARCHAR(255),
		@Status VARCHAR(50),
		@OrderDetailID INT, -- This will be ignored for new insertions
		@ProductID INT,
		@Quantity INT,
		@Price DECIMAL(10, 2)
	AS
	BEGIN
		BEGIN TRY
			BEGIN TRANSACTION;
        
			-- Update Orders table
			UPDATE Orders
			SET CustomerID = @CustomerID,
				EmployeeID = @EmployeeID,
				OrderDate = @OrderDate,
				ShipDate = @ShipDate,
				ShippingAddress = @ShippingAddress,
				Status = @Status
			WHERE OrderID = @OrderID;

			-- Check if the OrderDetailID exists
			IF EXISTS (SELECT 1 FROM Order_Details WHERE OrderDetailID = @OrderDetailID AND OrderID = @OrderID)
			BEGIN
				-- Update the existing Order_Detail
				UPDATE Order_Details
				SET ProductID = @ProductID,
					Quantity = @Quantity,
					Price = @Price
				WHERE OrderDetailID = @OrderDetailID;
			END
        
	ELSE
	BEGIN
		-- Calculate a new OrderDetailID by finding the max value and adding 1
		DECLARE @NewOrderDetailID INT;
		SELECT @NewOrderDetailID = ISNULL(MAX(OrderDetailID), 0) + 1 FROM Order_Details;

		INSERT INTO Order_Details (OrderDetailID, OrderID, ProductID, Quantity, Price)
		VALUES (@NewOrderDetailID, @OrderID, @ProductID, @Quantity, @Price);
	END



			COMMIT TRANSACTION;
		END TRY
		BEGIN CATCH
			ROLLBACK TRANSACTION;
			THROW;
		END CATCH
	END;
	GO

--Executing procedure for Updating Orders
	EXEC UpdateOrderAndDetails2
    @OrderID = 18,
    @CustomerID = 1,
    @EmployeeID = 1,
    @OrderDate = '2021-01-01',
    @ShipDate = '2021-01-05',
    @ShippingAddress = '123 Main St',
    @Status = 'Shipped',
    @OrderDetailID = 10,
    @ProductID = 1,
    @Quantity = 10,
    @Price = 99.99;




--Procedure for Adding New Orders
CREATE PROCEDURE AddNewOrderWithDetails
    @CustomerID INT,
    @EmployeeID INT,
    @OrderDate DATE,
    @ShipDate DATE = NULL, -- Allowing NULL if not provided
    @ShippingAddress VARCHAR(255),
    @Status VARCHAR(50),
    @ProductDetails ProductDetailType READONLY
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @NewOrderID INT;

    BEGIN TRY
        BEGIN TRANSACTION;
        
     
		SELECT @NewOrderID = ISNULL(MAX(OrderID), 0) + 1 FROM Orders;

		INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status)
		VALUES (@NewOrderID, @CustomerID, @EmployeeID, @OrderDate, @ShipDate, @ShippingAddress, @Status);

        
        SELECT @NewOrderID = SCOPE_IDENTITY();
        
        INSERT INTO Order_Details (OrderID, ProductID, Quantity, Price)
        SELECT @NewOrderID, ProductID, Quantity, Price FROM @ProductDetails;
        
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF (@@TRANCOUNT > 0)
        BEGIN
            ROLLBACK TRANSACTION;
        END

       
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
        DECLARE @ErrorState INT = ERROR_STATE();
        
        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END;
GO

--Executing Procedure for Adding New Orders
CREATE TYPE dbo.ProductDetailType AS TABLE
(
    ProductID INT,
    Quantity INT,
    Price DECIMAL(10,2)
);
-- declaring a variable of the table type to hold your product details


-- Populating variable with the product details for the new order
INSERT INTO @OrderProductDetails (ProductID, Quantity, Price)
VALUES 
    (1, 10, 19.99),  
    (2, 5, 29.99);   

DECLARE @OrderProductDetails AS ProductDetailType;

EXEC AddNewOrderWithDetails
    @CustomerID = 2,                  
    @EmployeeID = 4,                  
    @OrderDate = '2023-01-01',          
    @ShipDate = '2023-01-05',           
    @ShippingAddress = '123 Walnut St, NewYork City, USA',
    @Status = 'Processing',             
    @ProductDetails = @OrderProductDetails; 

	Select * from Orders;


--Procedure for Adding New Product	
CREATE OR ALTER PROCEDURE AddNewProduct
    @CategoryID INT,
    @Name VARCHAR(255),
    @Description TEXT,
    @Price DECIMAL(10,2),
    @NewProductID INT OUTPUT
AS
BEGIN
    
    DECLARE @CalculatedProductID INT;
    SELECT @CalculatedProductID = ISNULL(MAX(Product_ID), 0) + 1 FROM Product;
    INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price)
    VALUES (@CalculatedProductID, @CategoryID, @Name, @Description, @Price);
    SET @NewProductID = @CalculatedProductID;
END;
GO


--Executing Procedure for Adding New Orders
DECLARE @OutputNewProductID INT;

EXEC AddNewProduct
    @CategoryID = 1,
    @Name = 'SonyDrone',
    @Description = 'Latest 4 wings with Sony lenses on the Camera',
    @Price = 99.99,
    @NewProductID = @OutputNewProductID OUTPUT;

SELECT @OutputNewProductID AS NewProductID;



--Procedure for Updating Product Price
CREATE PROCEDURE UpdateProductPrice
    @ProductID INT,
    @NewPrice DECIMAL(10,2)
AS
BEGIN
    UPDATE Product
    SET Price = @NewPrice
    WHERE Product_ID = @ProductID;
END
GO

--Executing Procedure for Updating Product Price
EXEC UpdateProductPrice
    @ProductID = 1, 
    @NewPrice = 120.00; 


	
--Procedure for View Product Info
CREATE PROCEDURE GetProductInfo
    @ProductID INT,
    @ProductInfo NVARCHAR(MAX) OUTPUT
AS
BEGIN
    SELECT @ProductInfo = 'Name: ' + p.Name + ', Category: ' + c.Name + ', Price: ' + CAST(p.Price AS NVARCHAR(10))
    FROM Product p
    INNER JOIN Category c ON p.CategoryID = c.CategoryID
    WHERE p.Product_ID = @ProductID;
END;
GO

--Executing Procedure for View Product Info

DECLARE @OutputProductInfo NVARCHAR(MAX);

EXEC GetProductInfo
    @ProductID = 1, 
    @ProductInfo = @OutputProductInfo OUTPUT;

SELECT @OutputProductInfo AS ProductInfo;



	