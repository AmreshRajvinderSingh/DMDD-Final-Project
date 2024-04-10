--Creating a trigger to update p&L table after there is new record in sales

CREATE TRIGGER trg_AfterSaleInsertProfitLoss
ON Sales
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @NextPnLID INT;

    -- Calculate the next PnLID
    SELECT @NextPnLID = ISNULL(MAX(PnLID), 0) + 1 FROM Profit_Loss;

    INSERT INTO Profit_Loss (PnLID, PeriodStartDate, PeriodEndDate, TotalRevenue, CostOfGoodsSold, OperatingExpenses)
    SELECT 
        @NextPnLID,
        i.SaleDate, 
        i.SaleDate, 
        i.SellingPrice * i.QuantitySold, 
        p.Price * i.QuantitySold, 
        0.00 
    FROM 
        inserted i
    INNER JOIN 
        Product p ON i.ProductID = p.Product_ID;
END;
GO

Drop trigger trg_AfterSaleInsertProfitLoss


--Creating a trigger to Update the stock after a Sale has been recorded
CREATE TRIGGER trg_AfterSaleDecreaseStock
ON Sales
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    -- Update stock quantity for the product sold
    UPDATE Stock
    SET Quantity = Quantity - i.QuantitySold
    FROM inserted i
    INNER JOIN Stock s ON i.ProductID = s.ProductID
   
    WHERE s.WarehouseID = (SELECT TOP 1 WarehouseID FROM Stock WHERE ProductID = i.ProductID ORDER BY Quantity DESC);

END;
GO


--A Procedure to enter a new sale into the sales table
CREATE PROCEDURE InsertNewSale
	@SaleID INT,
    @OrderID INT,
    @ProductID INT,
    @QuantitySold INT,
    @SellingPrice DECIMAL(10, 2),
    @SaleDate DATE
AS
BEGIN
    INSERT INTO Sales (SaleID, OrderID, ProductID, QuantitySold, SellingPrice, SaleDate)
    VALUES (@SaleID, @OrderID, @ProductID, @QuantitySold, @SellingPrice, @SaleDate);
END;
GO

drop procedure InsertNewSale


--An executing statement to execute the procedure
EXEC InsertNewSale

	@SaleID= 52,
    @OrderID = 13, 
    @ProductID = 2, 
    @QuantitySold = 3, 
    @SellingPrice = 109.99, 
    @SaleDate = '2024-04-09';

	Select * from Stock
		Select * from Profit_Loss
			Select * from Sales