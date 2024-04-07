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
// const {
//   //   createWarehouse,
//   //   createCategory,
//   //   createSupplier,
//   //   createEmployee,
//   //   createCustomer,
//     createAddress,
//   //   createStock,
//   //   createProduct,
//   //   createProductSupplier,
//   //   createPurchaseOrder,
//   //   createPurchaseOrderDetail,
//   //   createOrder,
//   //   createOrderDetail,
//   //   createShipment,
//   //   createSale,
//   //   createProfitLoss
//   } = require('../controllers/postData');
  
  // POST routes for creating new records
  // router.post('/warehouses', createWarehouse);
  // router.post('/categories', createCategory);
  // router.post('/suppliers', createSupplier);
  // router.post('/employees', createEmployee);
  // router.post('/customers', createCustomer);
  // router.post('/addresses', createAddress);
  // router.post('/stocks', createStock);
  // router.post('/products', createProduct);
  // router.post('/product-suppliers', createProductSupplier);
  // router.post('/purchase-orders', createPurchaseOrder);
  // router.post('/purchase-order-details', createPurchaseOrderDetail);
  // router.post('/orders', createOrder);
  // router.post('/order-details', createOrderDetail);
  // router.post('/shipments', createShipment);
  // router.post('/sales', createSale);
  // router.post('/profit-loss', createProfitLoss);
  




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
router.get('/purchase-orders', getAllPurchaseOrderDetails);
router.get('/orders', getAllOrders);
router.get('/order-details', getAllOrderDetails);
router.get('/shipments', getAllShipments);
router.get('/sales', getAllSales);
router.get('/profit-loss', getAllProfitLosses);

module.exports = router;
