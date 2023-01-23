const express = require('express');
const router = express.Router();
const productController = require("../controllers/product");

router.get("/cart", productController.cart);

router.get("/product/:id",productController.detail);

module.exports = router;
