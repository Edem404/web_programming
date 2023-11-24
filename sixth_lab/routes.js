const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/read', controller.read);
router.get('/product/:productId', controller.getProductById);

module.exports = router;