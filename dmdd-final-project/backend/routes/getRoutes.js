const express = require('express');
const router = express.Router();
const {
  getAllWarehouses,
  getAllCategories,
  getAllSuppliers,
  getAllEmployees,
  getAllCustomers,
  getAllAddresses,
  getAllStocks,
  getAllProducts,
  getAllProductSuppliers,
  getAllPurchaseOrders,
  getAllPurchaseOrderDetails,
  getAllOrders,
  getAllOrderDetails,
  getAllShipments,
  getAllSales,
  getAllProfitLosses,
} = require('../controllers/getData');




router.get('/warehouses', getAllWarehouses);
router.get('/categories', getAllCategories);
router.get('/suppliers', getAllSuppliers);
router.get('/employees', getAllEmployees);
router.get('/customers', getAllCustomers);
router.get('/addresses', getAllAddresses);
router.get('/stocks', getAllStocks);
router.get('/products', getAllProducts);
router.get('/product-suppliers', getAllProductSuppliers);
router.get('/purchase-orders', getAllPurchaseOrders);
router.get('/purchase-order-details', getAllPurchaseOrderDetails);
router.get('/orders', getAllOrders);
router.get('/order-details', getAllOrderDetails);
router.get('/shipments', getAllShipments);
router.get('/sales', getAllSales);
router.get('/profit-loss', getAllProfitLosses);

module.exports = router;
