const express = require('express');
const router = express.Router();
const {

createAddress,
createWarehouse,
createCustomer,
createEmployee,
createOrderDetail,
createOrder,
createProductSupplier,
createProduct,
createPurchaseOrderDetail,
createPurchaseOrder,
createShipment,
createStockEntry,
createSupplier,
createCategory
} = require('../controllers/postData');



router.post('/addresses', createAddress);
router.post('/warehouses', createWarehouse);
router.post('/customers', createCustomer);
router.post('/employees', createEmployee);
router.post('/order-details', createOrderDetail);
router.post('/orders', createOrder);
router.post('/product-suppliers', createProductSupplier);
router.post('/products', createProduct);
router.post('/purchase-order-details', createPurchaseOrderDetail);
router.post('/purchase-orders', createPurchaseOrder);
router.post('/shipments', createShipment);
router.post('/stock-entries', createStockEntry);
router.post('/suppliers', createSupplier);
router.post('/categories', createCategory);

module.exports = router;
