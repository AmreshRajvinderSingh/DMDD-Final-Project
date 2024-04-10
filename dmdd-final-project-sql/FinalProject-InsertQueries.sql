

INSERT INTO Category (CategoryID, Name, Description) VALUES
(1, 'Electronics', 'Electronic items including smartphones, laptops, and tablets'),
(2, 'Clothing', 'All sorts of clothing from casual to formal wear'),
(3, 'Home Appliances', 'Appliances for everyday household use'),
(4, 'Books', 'A wide range of books from educational to fiction'),
(5, 'Furniture', 'Furniture items for home and office'),
(6, 'Sports', 'Sports equipment and accessories'),
(7, 'Groceries', 'Everyday grocery items'),
(8, 'Toys', 'Toys for children of all ages'),
(9, 'Health & Beauty', 'Health and beauty products'),
(10, 'Gardening', 'Gardening tools and plants');

-- Category 2: Clothing
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(11, 2, 'Denim Jeans', 'Stylish and durable denim jeans', 49.99),
(12, 2, 'Leather Jacket', 'Premium leather jacket for bikers', 89.99),
(13, 2, 'Graphic T-Shirt', 'Cotton t-shirt with a trendy print', 19.99),
(14, 2, 'Summer Dress', 'Light and airy summer dress', 59.99),
(15, 2, 'Sneakers', 'Comfortable running sneakers', 39.99);

-- Category 3: Home Appliances
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(16, 3, 'Microwave Oven', 'Compact microwave oven with grill function', 99.99),
(17, 3, 'Vacuum Cleaner', 'High-power vacuum cleaner with HEPA filter', 149.99),
(18, 3, 'Air Conditioner', 'Energy-efficient air conditioner with smart controls', 299.99),
(19, 3, 'Espresso Machine', 'Barista-grade espresso machine', 499.99),
(20, 3, 'Electric Kettle', 'Fast-boiling electric kettle', 29.99);

-- Category 4: Books
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(21, 4, 'Thrilling Tales', 'Collection of short thriller stories', 14.99),
(22, 4, 'Science 101', 'Introduction to fundamental concepts of science', 29.99),
(23, 4, 'MasterChef Recipes', 'Cookbook with recipes from the famous show MasterChef', 24.99),
(24, 4, 'History of Art', 'Comprehensive guide to the history of art', 49.99),
(25, 4, 'Space Odyssey', 'A novel about space exploration and adventure', 19.99);

-- Category 5: Furniture
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(26, 5, 'Sofa Set', 'Luxurious and comfortable sofa set', 799.99),
(27, 5, 'Dining Table', 'Elegant wooden dining table', 349.99),
(28, 5, 'Bookshelf', 'Spacious bookshelf with a classic design', 199.99),
(29, 5, 'Office Chair', 'Ergonomic office chair with lumbar support', 149.99),
(30, 5, 'Patio Set', 'Outdoor patio furniture set', 499.99);

-- Category 6: Sports
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(31, 6, 'Football', 'Professional league football', 24.99),
(32, 6, 'Tennis Racket', 'Carbon fiber tennis racket', 99.99),
(33, 6, 'Yoga Mat', 'Eco-friendly yoga mat', 29.99),
(34, 6, 'Basketball', 'Official size and weight basketball', 29.99),
(35, 6, 'Golf Clubs Set', 'Complete set of golf clubs', 399.99);

-- Category 7: Groceries
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(36, 7, 'Organic Olive Oil', 'Extra virgin organic olive oil', 15.99),
(37, 7, 'Whole Wheat Pasta', 'Healthy whole wheat pasta', 4.99),
(38, 7, 'Almond Milk', 'Lactose-free almond milk', 3.99),
(39, 7, 'Granola Bars', 'Energy-packed granola bars', 5.99),
(40, 7, 'Coffee Beans', 'Premium Arabica coffee beans', 12.99);

-- Complete Category 8: Toys
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(45, 8, 'Dollhouse', 'A charming dollhouse with miniature furniture', 79.99),
(46, 8, 'Puzzle Set', '500-piece jigsaw puzzle for problem-solving fun', 15.99),
(47, 8, 'Action Figure', 'Poseable action figure with accessories', 14.99),
(48, 8, 'Magic Kit', 'Magic trick set for budding magicians', 22.99),
(49, 8, 'Science Kit', 'Educational science kit for kids', 25.99);

-- Category 9: Health & Beauty
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(50, 9, 'Moisturizing Cream', 'Hydrating skin cream with vitamin E', 9.99),
(51, 9, 'Shampoo', 'Natural ingredient shampoo for all hair types', 6.99),
(52, 9, 'Perfume', 'Eau de toilette with a fresh scent', 29.99),
(53, 9, 'Makeup Kit', 'Complete makeup kit for a stunning look', 49.99),
(54, 9, 'Sunscreen Lotion', 'Broad-spectrum SPF 50 sunscreen lotion', 12.99);

-- Category 10: Gardening
INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(55, 10, 'Gardening Tools Set', 'Essential tools for gardening activities', 29.99),
(56, 10, 'Flower Pots', 'Set of terracotta flower pots', 19.99),
(57, 10, 'Watering Can', 'Metal watering can with a long spout', 14.99),
(58, 10, 'Plant Fertilizer', 'Organic fertilizer for healthy plant growth', 7.99),
(59, 10, 'Garden Hose', 'Flexible 50ft garden hose with adjustable nozzle', 24.99);


INSERT INTO Product (Product_ID, CategoryID, Name, Description, Price) VALUES
(1, 1, 'Smartphone X1', 'Latest model with 5G connectivity', 999.99),
(2, 1, 'Laptop Pro 15', 'High-performance laptop with 16GB RAM', 1299.99),
(3, 1, 'E-Reader ReadIt', 'Compact e-reader with e-ink display', 199.99),
(4, 1, 'Smartwatch HealthPlus', 'Fitness tracking smartwatch', 299.99),
(5, 1, 'Bluetooth Speaker', 'Portable speaker with high-quality sound', 99.99),
(6, 1, 'Gaming Console PlayMax', 'Next-gen gaming console for all your gaming needs', 499.99),
(7, 1, 'Wireless Earbuds', 'Noise-cancelling wireless earbuds', 149.99),
(8, 1, 'Tablet S8', 'Lightweight tablet with 10-inch screen', 349.99),
(9, 1, 'Smart Home Hub', 'Control your smart home devices with ease', 129.99),
(10, 1, 'Action Camera', '4K action camera for sports and adventures', 199.99);

INSERT INTO Supplier (SupplierID, CompanyName, ContactName, Address, City, Country, Phone, Email) VALUES
(1, 'ElectroGoods Inc.', 'John Doe', '123 Tech Ave', 'Tech City', 'Techland', '123-456-7890', 'contact@electrogoods.com'),
(2, 'GadgetWorld', 'Emily Clark', '456 Gadget St', 'Gadgetville', 'Gadgetland', '234-567-8901', 'info@gadgetworld.com'),
(3, 'TechSolutions', 'Michael Smith', '789 Innovation Rd', 'Innovate City', 'Innovateland', '345-678-9012', 'support@techsolutions.com'),
(4, 'SmartTech Supplies', 'Anna Johnson', '101 Smart St', 'Smartville', 'Smartland', '456-789-0123', 'sales@smarttechsupplies.com'),
(5, 'Apex Electronics', 'Robert Brown', '202 Apex Ave', 'Apex City', 'Apexland', '567-890-1234', 'hello@apexelectronics.com'),
(6, 'NextGen Gadgets', 'Linda White', '303 Next Rd', 'Nextville', 'Nextland', '678-901-2345', 'contact@nextgengadgets.com'),
(7, 'EcoElectronics', 'David Wilson', '404 Eco St', 'Ecoville', 'Ecoland', '789-012-3456', 'support@ecoelectronics.com'),
(8, 'InnoTech Distributors', 'Sarah Moore', '505 Innovate Ave', 'Innovate City', 'Innovateland', '890-123-4567', 'info@innotechdistributors.com'),
(9, 'GigaTech', 'James Taylor', '606 Giga Rd', 'Gigatechville', 'Gigatechland', '901-234-5678', 'sales@gigatech.com'),
(10, 'Quantum Electronics', 'Patricia Anderson', '707 Quantum St', 'Quantum City', 'Quantumland', '012-345-6789', 'hello@quantumelectronics.com');


INSERT INTO Warehouse (WarehouseID, Location, Address, City, Country) VALUES
(1, 'North Zone', '1234 North St', 'Chicago', 'USA'),
(2, 'South Zone', '5678 South St', 'Houston', 'USA'),
(3, 'East Zone', '9101 East St', 'New York', 'USA'),
(4, 'West Zone', '1123 West St', 'San Francisco', 'USA'),
(5, 'Central Zone', '1415 Central St', 'Dallas', 'USA'),
(6, 'NorthEast Zone', '1617 NorthEast St', 'Boston', 'USA'),
(7, 'SouthEast Zone', '1819 SouthEast St', 'Miami', 'USA'),
(8, 'NorthWest Zone', '2021 NorthWest St', 'Seattle', 'USA'),
(9, 'SouthWest Zone', '2223 SouthWest St', 'Phoenix', 'USA'),
(10, 'CentralEast Zone', '2425 CentralEast St', 'Atlanta', 'USA');


INSERT INTO Stock (StockID, ProductID, WarehouseID, Quantity) VALUES
(1, 1, 1, 50),
(2, 2, 1, 30),
(3, 3, 1, 40),
(4, 4, 2, 25),
(5, 5, 2, 35),
(6, 6, 3, 45),
(7, 7, 3, 20),
(8, 8, 4, 60),
(9, 9, 4, 55),
(10, 10, 5, 65);

INSERT INTO Product_Supplier (Product_Supplier_ID, Product_ID, SupplierID) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 5, 3),
(6, 6, 4),
(7, 7, 5),
(8, 8, 6),
(9, 9, 7),
(10, 10, 8);

INSERT INTO Purchase_Order (PurchaseOrderID, SupplierID, OrderDate, Status) VALUES
(1, 1, '2024-01-05', 'Received'),
(2, 1, '2024-02-12', 'In Transit'),
(3, 2, '2024-04-08', 'Delivered'),
(4, 2, '2024-02-15', 'Received'),
(5, 3, '2024-03-20', 'In Transit'),
(6, 3, '2024-06-23', 'Delivered'),
(7, 4, '2024-07-01', 'Received'),
(8, 4, '2024-08-18', 'In Transit'),
(9, 5, '2024-09-09', 'Delivered'),
(10, 5, '2024-10-29', 'Received');

-- 2020 Purchase Orders
INSERT INTO Purchase_Order (PurchaseOrderID, SupplierID, OrderDate, Status) VALUES
(21, 6, '2020-01-10', 'Received'),
(22, 7, '2020-01-15', 'In Transit'),
(23, 8, '2020-01-20', 'Delivered'),
(24, 9, '2020-02-01', 'Received'),
(25, 10, '2020-02-10', 'In Transit'), 
(26, 4, '2020-02-15', 'Delivered'),
(27, 7, '2020-03-01', 'Received'),
(28, 8, '2020-03-10', 'In Transit'),
(29, 9, '2020-03-15', 'Delivered'),
(30, 10, '2020-03-20', 'Received');

-- 2021 Purchase Orders
INSERT INTO Purchase_Order (PurchaseOrderID, SupplierID, OrderDate, Status) VALUES
(31, 6, '2021-01-10', 'Received'),
(32, 7, '2021-01-15', 'In Transit'),
(33, 8, '2021-01-20', 'Delivered'),
(34, 9, '2021-02-01', 'Received'),
(35, 10, '2021-02-10', 'In Transit'),
(36, 6, '2021-02-15', 'Delivered'),
(37, 7, '2021-03-01', 'Received'),
(38, 8, '2021-03-10', 'In Transit'),
(39, 9, '2021-03-15', 'Delivered'),
(40, 10, '2021-03-20', 'Received');

-- 2022 Purchase Orders
INSERT INTO Purchase_Order (PurchaseOrderID, SupplierID, OrderDate, Status) VALUES
(41, 6, '2022-01-05', 'Received'),
(42, 7, '2022-02-12', 'In Transit'),
(43, 8, '2022-03-20', 'Delivered'),
(44, 9, '2022-04-08', 'Received'),
(45, 10, '2022-05-15', 'In Transit'),
(46, 6, '2022-06-23', 'Delivered'),
(47, 7, '2022-07-01', 'Received'),
(48, 8, '2022-08-18', 'In Transit'),
(49, 9, '2022-09-09', 'Delivered'),
(50, 10, '2022-10-29', 'Received');


-- 2023 Purchase Orders
INSERT INTO Purchase_Order (PurchaseOrderID, SupplierID, OrderDate, Status) VALUES
(51, 6, '2023-03-08', 'Received'),
(52, 7, '2023-05-13', 'In Transit'),
(53, 8, '2023-07-21', 'Delivered'),
(54, 9, '2023-09-09', 'Received'),
(55, 10, '2023-11-16', 'In Transit'),
(56, 6, '2023-02-24', 'Delivered'),
(57, 7, '2023-04-02', 'Received'),
(58, 8, '2023-06-19', 'In Transit'),
(59, 9, '2023-08-10', 'Delivered'),
(60, 10, '2023-10-30', 'Received');



INSERT INTO Purchase_Order_Detail (Purchase_Order_DetailID, PurchaseOrderID, ProductID, Quantity, Price) VALUES
(1, 1, 1, 20, 999.99),
(2, 1, 2, 15, 1299.99),
(3, 2, 3, 30, 199.99),
(4, 2, 4, 25, 299.99),
(5, 3, 5, 10, 99.99),
(6, 3, 6, 12, 499.99),
(7, 4, 7, 8, 149.99),
(8, 4, 8, 16, 349.99),
(9, 5, 9, 5, 129.99),
(10, 5, 10, 10, 199.99),
(11, 6, 5, 15, 99.99),
(12, 6, 6, 8, 499.99),
(13, 7, 7, 10, 149.99),
(14, 7, 8, 6, 349.99),
(15, 8, 9, 20, 129.99),
(16, 8, 10, 12, 199.99),
(17, 9, 1, 7, 999.99),
(18, 9, 2, 9, 1299.99),
(19, 10, 3, 14, 199.99),
(20, 10, 4, 18, 299.99);

-- 2020 Purchase Order Details 
INSERT INTO Purchase_Order_Detail (Purchase_Order_DetailID, PurchaseOrderID, ProductID, Quantity, Price) VALUES
(21, 21, 1, 20, 950.00),
(22, 22, 2, 15, 1200.00),
(23, 23, 3, 30, 180.00),
(24, 24, 4, 25, 250.00),
(25, 25, 5, 10, 80.00),
(26, 26, 6, 12, 450.00),
(27, 27, 7, 8, 130.00),
(28, 28, 8, 16, 320.00),
(29, 29, 9, 5, 110.00),
(30, 30, 10, 10, 180.00);

-- 2021 Purchase Order Details
INSERT INTO Purchase_Order_Detail (Purchase_Order_DetailID, PurchaseOrderID, ProductID, Quantity, Price) VALUES
(31, 31, 1, 22, 960.00),
(32, 32, 2, 16, 1220.00),
(33, 33, 3, 28, 185.00),
(34, 34, 4, 24, 255.00),
(35, 35, 5, 12, 85.00),
(36, 36, 6, 10, 455.00),
(37, 37, 7, 9, 135.00),
(38, 38, 8, 14, 325.00),
(39, 39, 9, 4, 115.00),
(40, 40, 10, 11, 185.00);

-- 2022 Purchase Order Details
INSERT INTO Purchase_Order_Detail (Purchase_Order_DetailID, PurchaseOrderID, ProductID, Quantity, Price) VALUES
(41, 41, 1, 21, 970.00),
(42, 42, 2, 17, 1230.00),
(43, 43, 3, 29, 190.00),
(44, 44, 4, 23, 260.00),
(45, 45, 5, 13, 88.00),
(46, 46, 6, 11, 460.00),
(47, 47, 7, 10, 140.00),
(48, 48, 8, 15, 330.00),
(49, 49, 9, 6, 118.00),
(50, 50, 10, 12, 188.00);

-- 2023 Purchase Order Details
INSERT INTO Purchase_Order_Detail (Purchase_Order_DetailID, PurchaseOrderID, ProductID, Quantity, Price) VALUES
(51, 51, 1, 23, 980.00),
(52, 52, 2, 18, 1240.00),
(53, 53, 3, 27, 195.00),
(54, 54, 4, 22, 265.00),
(55, 55, 5, 14, 90.00),
(56, 56, 6, 9, 465.00),
(57, 57, 7, 11, 145.00),
(58, 58, 8, 13, 335.00),
(59, 59, 9, 7, 120.00),
(60, 60, 10, 13, 190.00);



INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status) VALUES
(1, 1, 1, '2024-03-05', '2024-03-10', '123 Customer St, Cityville', 'Shipped'),
(2, 2, 1, '2024-05-06', '2024-05-12', '234 Customer Ave, Townsville', 'Delivered'),
(3, 3, 2, '2024-07-07', NULL, '345 Customer Ln, Villageville', 'Processing'),
(4, 4, 2, '2024-09-08', '2024-09-15', '456 Customer Rd, Hamletville', 'Shipped'),
(5, 5, 3, '2024-11-09', '2024-11-18', '567 Customer Blvd, Citytown', 'Delivered'),
(6, 6, 3, '2024-02-10', NULL, '678 Customer Way, Towncity', 'Processing'),
(7, 7, 4, '2024-04-11', '2024-04-19', '789 Customer Trail, Villagetown', 'Shipped'),
(8, 8, 4, '2024-06-12', '2024-06-20', '890 Customer Path, Hamletown', 'Delivered'),
(9, 9, 5, '2024-08-13', NULL, '901 Customer Hwy, Cityvillage', 'Processing'),
(10, 10, 5, '2024-10-14', '2024-10-23', '101 Customer Park, Townvillage', 'Shipped');

-- Orders for 2020
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status) VALUES
(11, 1, 1, '2020-03-08', '2020-03-15', '123 Customer St, Cityville', 'Shipped'),
(12, 2, 1, '2020-05-13', '2020-05-20', '234 Customer Ave, Townsville', 'Delivered'),
(13, 3, 2, '2020-07-21', NULL, '345 Customer Ln, Villageville', 'Processing'),
(14, 4, 2, '2020-09-09', '2020-09-16', '456 Customer Rd, Hamletville', 'Shipped'),
(15, 5, 3, '2020-11-16', '2020-11-23', '567 Customer Blvd, Citytown', 'Delivered'),
(16, 6, 3, '2020-02-24', NULL, '678 Customer Way, Towncity', 'Processing'),
(17, 7, 4, '2020-04-02', '2020-04-09', '789 Customer Trail, Villagetown', 'Shipped'),
(18, 8, 4, '2020-06-19', '2020-06-26', '890 Customer Path, Hamletown', 'Delivered'),
(19, 9, 5, '2020-08-10', NULL, '901 Customer Hwy, Cityvillage', 'Processing'),
(20, 10, 5, '2020-10-30', '2020-11-06', '101 Customer Park, Townvillage', 'Shipped');

-- Orders for 2021
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status) VALUES
(21, 1, 6, '2021-07-15', '2021-07-20', '123 Customer St, Cityville', 'Shipped'),
(22, 2, 6, '2021-05-25', '2021-05-30', '234 Customer Ave, Townsville', 'Delivered'),
(23, 3, 7, '2021-09-05', NULL, '345 Customer Ln, Villageville', 'Processing'),
(24, 4, 7, '2021-04-10', '2021-04-15', '456 Customer Rd, Hamletville', 'Shipped'),
(25, 5, 8, '2021-11-20', '2021-11-25', '567 Customer Blvd, Citytown', 'Delivered'),
(26, 6, 8, '2021-08-15', NULL, '678 Customer Way, Towncity', 'Processing'),
(27, 7, 9, '2021-06-25', '2021-07-01', '789 Customer Trail, Villagetown', 'Shipped'),
(28, 8, 9, '2021-10-05', '2021-10-10', '890 Customer Path, Hamletown', 'Delivered'),
(29, 9, 10, '2021-03-20', NULL, '901 Customer Hwy, Cityvillage', 'Processing'),
(30, 10, 10, '2021-02-10', '2021-02-15', '101 Customer Park, Townvillage', 'Shipped');


-- Orders for 2022
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status) VALUES
(31, 1, 1, '2022-07-08', '2022-07-15', '123 Customer St, Cityville', 'Shipped'),
(32, 2, 1, '2022-05-23', '2022-05-30', '234 Customer Ave, Townsville', 'Delivered'),
(33, 3, 2, '2022-09-01', NULL, '345 Customer Ln, Villageville', 'Processing'),
(34, 4, 2, '2022-04-15', '2022-04-22', '456 Customer Rd, Hamletville', 'Shipped'),
(35, 5, 3, '2022-11-20', '2022-11-27', '567 Customer Blvd, Citytown', 'Delivered'),
(36, 6, 3, '2022-02-25', NULL, '678 Customer Way, Towncity', 'Processing'),
(37, 7, 4, '2022-04-03', '2022-04-10', '789 Customer Trail, Villagetown', 'Shipped'),
(38, 8, 4, '2022-06-20', '2022-06-27', '890 Customer Path, Hamletown', 'Delivered'),
(39, 9, 5, '2022-08-11', NULL, '901 Customer Hwy, Cityvillage', 'Processing'),
(40, 10, 5, '2022-10-31', '2022-11-07', '101 Customer Park, Townvillage', 'Shipped');


-- Orders for 2023
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipDate, ShippingAddress, Status) VALUES
(41, 1, 6, '2023-07-19', '2023-07-15', '123 Customer St, Cityville', 'Shipped'),
(42, 2, 6, '2023-05-23', '2023-05-30', '234 Customer Ave, Townsville', 'Delivered'),
(43, 3, 7, '2023-09-11', NULL, '345 Customer Ln, Villageville', 'Processing'),
(44, 4, 7, '2023-02-18', '2023-04-22', '456 Customer Rd, Hamletville', 'Shipped'),
(45, 5, 8, '2023-11-20', '2023-11-27', '567 Customer Blvd, Citytown', 'Delivered'),
(46, 6, 8, '2023-02-25', NULL, '678 Customer Way, Towncity', 'Processing'),
(47, 7, 9, '2023-01-23', '2023-04-10', '789 Customer Trail, Villagetown', 'Shipped'),
(48, 8, 9, '2023-06-27', '2023-06-27', '890 Customer Path, Hamletown', 'Delivered'),
(49, 9, 10, '2023-08-11', NULL, '901 Customer Hwy, Cityvillage', 'Processing'),
(50, 10, 10, '2023-09-15', '2023-11-07', '101 Customer Park, Townvillage', 'Shipped');





INSERT INTO Employee (EmployeeID, FirstName, LastName, Email, Phone, Position, Department) VALUES
(1, 'Davy', 'jones', 'jhonesdavy@example.com', '555-0101', 'Sales Representative', 'Sales'),
(2, 'Will', 'Smith', 'willsmith@example.com', '555-0102', 'Customer Support', 'Support'),
(3, 'Nick', 'Brown', 'nickbrown@example.com', '555-0103', 'Warehouse Manager', 'Warehouse'),
(4, 'Judy', 'Davis', 'judydavis@example.com', '555-0104', 'Accountant', 'Finance'),
(5, 'Abraham', 'Wilson', 'Abrahamwilson@example.com', '555-0105', 'Chief Technical Officer', 'IT'),
(6, 'Monica', 'Garcia', 'jessicagarcia@example.com', '555-0106', 'Marketing Director', 'Marketing'),
(7, 'Jeremy', 'Martinez', 'jeremymartinez@example.com', '555-0107', 'Sales Manager', 'Sales'),
(8, 'Sam', 'Robinson', 'Samrobinson@example.com', '555-0108', 'Human Resources Manager', 'HR'),
(9, 'George', 'Clark', 'Georgeclark@example.com', '555-0109', 'Operations Manager', 'Operations'),
(10, 'Randy', 'Rodriguez', 'Randyrodriguez@example.com', '555-0110', 'Customer Relations', 'Support');



INSERT INTO Customer (CustomerID, FirstName, LastName, Email, Phone, Address, City, Country) VALUES
(1, 'Alice', 'Johnson', 'alice.johnson@example.com', '555-1001', '123 Maple Street', 'Springfield', 'USA'),
(2, 'Bob', 'Smith', 'bob.smith@example.com', '555-1002', '456 Oak Street', 'Greenville', 'USA'),
(3, 'Carol', 'Davis', 'carol.davis@example.com', '555-1003', '789 Pine Street', 'Smalltown', 'USA'),
(4, 'David', 'Wilson', 'david.wilson@example.com', '555-1004', '101 Apple Boulevard', 'Centerville', 'USA'),
(5, 'Eva', 'Martin', 'eva.martin@example.com', '555-1005', '202 Cherry Avenue', 'Lakeview', 'USA'),
(6, 'Frank', 'Brown', 'frank.brown@example.com', '555-1006', '303 Peach Road', 'Riverview', 'USA'),
(7, 'Grace', 'Jones', 'grace.jones@example.com', '555-1007', '404 Plum Lane', 'Hilltop', 'USA'),
(8, 'Henry', 'Miller', 'henry.miller@example.com', '555-1008', '505 Grape Drive', 'Seaview', 'USA'),
(9, 'Isabel', 'Taylor', 'isabel.taylor@example.com', '555-1009', '606 Lemon Street', 'Forestville', 'USA'),
(10, 'Jack', 'Anderson', 'jack.anderson@example.com', '555-1010', '707 Lime Court', 'Clifftown', 'USA');

INSERT INTO Order_Details (OrderDetailID, OrderID, ProductID, Quantity, Price) VALUES
(1, 1, 1, 2, 999.99),
(2, 2, 2, 1, 1299.99),
(3, 3, 3, 3, 199.99),
(4, 4, 4, 1, 299.99),
(5, 5, 5, 2, 99.99),
(6, 6, 6, 1, 499.99),
(7, 7, 7, 1, 149.99),
(8, 8, 8, 2, 349.99),
(9, 9, 9, 1, 129.99),
(10, 10, 10, 2, 199.99),
(11, 1, 2, 1, 1299.99),
(12, 2, 3, 2, 199.99),
(13, 3, 4, 1, 299.99),
(14, 4, 5, 2, 99.99),
(15, 5, 6, 1, 499.99),
(16, 6, 7, 2, 149.99),
(17, 7, 8, 1, 349.99),
(18, 8, 9, 2, 129.99),
(19, 9, 10, 1, 199.99),
(20, 10, 1, 3, 999.99);


INSERT INTO Shipment (ShipmentID, OrderID, ShippedDate, EstimatedArrivalDate, Carrier, TrackingNumber, Status) VALUES
(1, 1, '2023-01-05', '2023-01-10', 'FastEx', 'FX123456789', 'Delivered'),
(2, 2, '2021-04-16', '2021-04-22', 'QuickShip', 'QS987654321', 'Delivered'),
(3, 3, '2024-03-07', '2024-03-13', 'RapidDelivery', 'RD223987655', 'Shipped'),
(4, 4, '2022-06-08', '2022-06-15', 'RapidDelivery', 'RD123987654', 'Delivered'),
(5, 5, '2022-02-09', '2022-02-18', 'SpeedyCouriers', 'SC456123789', 'Delivered'),
(6, 6, '2024-03-10', '2024-03-16', 'FastEx', 'FX789456124', 'Shipped'),
(7, 7, '2021-08-11', '2021-08-19', 'FastEx', 'FX789456123', 'Delivered'),
(8, 8, '2023-04-12', '2023-04-20', 'QuickShip', 'QS321654987', 'Delivered'),
(9, 9, '2024-02-13', '2024-02-19', 'RapidDelivery', 'RD654321988', 'Shipped'),
(10, 10, '2022-10-14', '2022-10-23', 'RapidDelivery', 'RD654321987', 'In Transit');

INSERT INTO Address (AddressID, CustomerID, Street, City, State, ZipCode, Country) VALUES
(1, 1, '123 Apple St', 'Springfield', 'StateA', '12345', 'USA'),
(2, 1, '124 Apple St', 'Springfield', 'StateA', '12346', 'USA'), -- Additional address for Customer 1
(3, 2, '234 Banana Ave', 'Greenville', 'StateB', '23456', 'USA'),
(4, 3, '345 Cherry Ln', 'Franklin', 'StateC', '34567', 'USA'),
(5, 4, '456 Date Rd', 'Clinton', 'StateD', '45678', 'USA'),
(6, 5, '567 Elderberry Blvd', 'Madison', 'StateE', '56789', 'USA'),
(7, 6, '678 Fig Cir', 'Jackson', 'StateF', '67890', 'USA'),
(8, 7, '789 Grape Dr', 'Lincoln', 'StateG', '78901', 'USA'),
(9, 8, '890 Huckleberry St', 'Springfield', 'StateH', '89012', 'USA'),
(10, 9, '901 Ivy Path', 'Jefferson', 'StateI', '90123', 'USA'),
(11, 10, '1010 Jasmine Park', 'Hamilton', 'StateJ', '01234', 'USA'),
(12, 10, '1012 Jasmine Park', 'Hamilton', 'StateJ', '01235', 'USA'); -- Additional address for Customer 10

INSERT INTO Sales (SaleID, OrderID, ProductID, QuantitySold, SellingPrice, SaleDate) VALUES
(1, 1, 1, 2, 950.00, '2024-01-05'),
(2, 2, 2, 1, 1250.00, '2024-05-18'),
(3, 3, 3, 3, 180.00, '2024-07-03'),
(4, 4, 4, 1, 280.00, '2024-10-28'),
(5, 5, 5, 2, 90.00, '2024-03-09'),
(6, 6, 6, 1, 470.00, '2024-01-10'),
(7, 7, 7, 1, 140.00, '2024-03-11'),
(8, 8, 8, 2, 330.00, '2024-11-12'),
(9, 9, 9, 1, 120.00, '2024-03-23'),
(10, 10, 10, 2, 190.00, '2024-10-14');

-- Sales for 2023
INSERT INTO Sales (SaleID, OrderID, ProductID, QuantitySold, SellingPrice, SaleDate) VALUES
(11, 1, 1, 2, 950.00, '2023-12-05'),
(12, 2, 2, 1, 1250.00, '2023-10-26'),
(13, 3, 3, 3, 180.00, '2023-05-07'),
(14, 4, 4, 1, 280.00, '2023-01-08'),
(15, 5, 5, 2, 90.00, '2023-07-19'),
(16, 6, 6, 1, 470.00, '2023-01-11'),
(17, 7, 7, 1, 140.00, '2023-08-14'),
(18, 8, 8, 2, 330.00, '2023-01-22'),
(19, 9, 9, 1, 120.00, '2023-04-13'),
(20, 10, 10, 2, 190.00, '2023-11-14');

-- Sales for 2022
INSERT INTO Sales (SaleID, OrderID, ProductID, QuantitySold, SellingPrice, SaleDate) VALUES
(21, 1, 1, 2, 950.00, '2022-01-05'),
(22, 2, 2, 1, 1250.00, '2022-05-06'),
(23, 3, 3, 3, 180.00, '2022-03-07'),
(24, 4, 4, 1, 280.00, '2022-10-08'),
(25, 5, 5, 2, 90.00, '2022-01-09'),
(26, 6, 6, 1, 470.00, '2022-11-10'),
(27, 7, 7, 1, 140.00, '2022-08-11'),
(28, 8, 8, 2, 330.00, '2022-03-12'),
(29, 9, 9, 1, 120.00, '2022-01-23'),
(30, 10, 10, 2, 190.00, '2022-11-14');

-- Sales for 2021
INSERT INTO Sales (SaleID, OrderID, ProductID, QuantitySold, SellingPrice, SaleDate) VALUES
(31, 1, 1, 2, 950.00, '2021-08-08'),
(32, 2, 2, 1, 1250.00, '2021-01-16'),
(33, 3, 3, 3, 180.00, '2021-09-07'),
(34, 4, 4, 1, 280.00, '2021-02-18'),
(35, 5, 5, 2, 90.00, '2021-06-23'),
(36, 6, 6, 1, 470.00, '2021-04-13'),
(37, 7, 7, 1, 140.00, '2021-11-11'),
(38, 8, 8, 2, 330.00, '2021-08-19'),
(39, 9, 9, 1, 120.00, '2021-04-12'),
(40, 10, 10, 2, 190.00, '2021-05-14');

-- Sales for 2020
INSERT INTO Sales (SaleID, OrderID, ProductID, QuantitySold, SellingPrice, SaleDate) VALUES
(41, 1, 1, 2, 950.00, '2020-11-05'),
(42, 2, 2, 1, 1250.00, '2020-10-09'),
(43, 3, 3, 3, 180.00, '2020-01-17'),
(44, 4, 4, 1, 280.00, '2020-07-28'),
(45, 5, 5, 2, 90.00, '2020-09-09'),
(46, 6, 6, 1, 470.00, '2020-03-30'),
(47, 7, 7, 1, 140.00, '2020-04-11'),
(48, 8, 8, 2, 330.00, '2020-02-17'),
(49, 9, 9, 1, 120.00, '2020-01-13'),
(50, 10, 10, 2, 190.00, '2020-08-14');


INSERT INTO Profit_Loss (PnLID, PeriodStartDate, PeriodEndDate, TotalRevenue, CostOfGoodsSold, OperatingExpenses, OtherIncome, OtherExpenses) VALUES
(1, '2024-01-01', '2024-01-31', 10000.00, 6000.00, 2000.00, 500.00, 300.00),
(2, '2021-01-01', '2021-12-31', 210000.00, 125000.00, 52000.00, 12000.00, 15000.00),
(3, '2022-01-01', '2022-12-31', 220000.00, 130000.00, 54000.00, 14000.00, 16000.00),
(4, '2023-01-01', '2023-12-31', 230000.00, 135000.00, 56000.00, 16000.00, 17000.00),
(5, '2024-01-01', '2024-12-31', 240000.00, 140000.00, 58000.00, 18000.00, 18000.00);


Select * from Warehouse ;
Select * from Supplier; 
Select * from Product;
Select * from Customer;
Select * from Profit_Loss;
Select * from Warehouse ;
Select * from Supplier; 
Select * from Product;
Select * from Customer;
Select * from Profit_Loss;
Select * from Warehouse ;
Select * from Supplier; 
Select * from Product;
Select * from Sales;
Select * from Profit_Loss;

BACKUP DATABASE [StockOptimate] TO DISK = N'C:\Users\91790\Desktop' WITH NOFORMAT, NOINIT, NAME = 'StockOptimate-Full Database Backup', SKIP, NOREWIND, NOUNLOAD, STATS = 10;
