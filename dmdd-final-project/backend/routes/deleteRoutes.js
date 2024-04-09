const express = require('express');
const router = express.Router();
const { deleteProfitLossRecord } = require('../controllers/deleteData');


router.delete('/deletepf', deleteProfitLossRecord);

module.exports = router;