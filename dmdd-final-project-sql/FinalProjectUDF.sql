--Function to find the average cost price as per the productid

CREATE FUNCTION udf_AverageCostPrice(@ProductID INT)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @AvgPrice DECIMAL(10, 2);

    SELECT @AvgPrice = AVG(Price)
    FROM Purchase_Order_Detail
    WHERE ProductID = @ProductID;

    RETURN ISNULL(@AvgPrice, 0);
END;
GO

--Executing the average cost function
SELECT dbo.udf_AverageCostPrice(1) AS AvgCostPrice;



--Function to calculate the stock value
CREATE FUNCTION udf_StockValue(@ProductID INT, @WarehouseID INT)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @Value DECIMAL(10, 2);
    DECLARE @Quantity INT;
    DECLARE @AvgCost DECIMAL(10, 2);

    SELECT @Quantity = Quantity
    FROM Stock
    WHERE ProductID = @ProductID AND WarehouseID = @WarehouseID;

    SELECT @AvgCost = dbo.udf_AverageCostPrice(@ProductID);

    SET @Value = @Quantity * @AvgCost;

    RETURN ISNULL(@Value, 0);
END;
GO

--Executing the stock value function
SELECT dbo.udf_StockValue(2, 1) AS StockValuePID1, dbo.udf_StockValue(2, 1) AS StockValuePID2,
dbo.udf_StockValue(3, 1) AS StockValuePID3,
dbo.udf_StockValue(4, 2) AS StockValuePID4,
 dbo.udf_StockValue(5, 2) AS StockValuePID5,
 dbo.udf_StockValue(6, 3) AS StockValuePID6;



--Creating a function to calculate the profit margin of different products based on their sales
CREATE FUNCTION udf_ProfitMargin(@ProductID INT, @SellingPrice DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @CostPrice DECIMAL(10, 2);
    DECLARE @ProfitMargin DECIMAL(10, 2);

-- Getting the average cost price for the product
    SELECT @CostPrice = dbo.udf_AverageCostPrice(@ProductID);

-- Calculating the profit margin
    IF @SellingPrice > 0 AND @CostPrice IS NOT NULL
    BEGIN
        SET @ProfitMargin = ((@SellingPrice - @CostPrice) / @SellingPrice) * 100;
    END
    ELSE
    BEGIN
-- Setting profit margin to 0 if selling price is 0 or cost price is null
        SET @ProfitMargin = 0;
    END

    RETURN @ProfitMargin;
END;
GO

--Executing profit margin function to display sales of all products
SELECT SaleID, dbo.udf_ProfitMargin(ProductID, SellingPrice) AS ProfitMarginPercentage
FROM Sales;


select * from Stock;