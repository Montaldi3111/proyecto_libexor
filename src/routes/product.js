const express = require('express');
const router = express.Router();
const productController = require("../controllers/product");

router.get("/product",productController.detail);
router.get("/cart", productController.cart);

module.exports = router;
