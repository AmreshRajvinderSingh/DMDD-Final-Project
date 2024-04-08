const express = require('express');
const router = express.Router();
const { updateProduct, updateSupplier, updateOrder, updateShipment,updateWarehouse } = require('../controllers/putData');

router.put('/products', updateProduct);
router.put('/suppliers', updateSupplier);
router.put('/orders', updateOrder);
router.put('/shipments', updateShipment);
router.put('/warehouses', updateWarehouse);

module.exports = router;