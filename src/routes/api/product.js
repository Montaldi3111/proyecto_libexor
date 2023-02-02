const express = require("express");
const router = express.Router();
const productApiController = require("../../controllers/api/product");

router.get("/allProducts", productApiController.all)
router.get("/lastProduct", productApiController.last)
router.get("/products/:id", productApiController.show);

module.exports = router