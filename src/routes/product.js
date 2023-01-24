const express = require('express');
const router = express.Router();
const productController = require("../controllers/product");

router.get("/cart", productController.cart);
router.get("/product/:id",productController.detail);
router.get("/product/edit/:id",productController.edit);

router.post("/create", productController.create);
router.post("/delete", productController.delete);
router.post("/update/:id", productController.update);

module.exports = router;
