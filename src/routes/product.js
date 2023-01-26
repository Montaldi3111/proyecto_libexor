const express = require('express');
const router = express.Router();
const path = require("path");
const productController = require("../controllers/product");
const multer = require("multer");
const auth = require("../middlewares/auth")

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, './public/images');
    },
    filename: (req,file,cb) => {
        let filename = 'image-' + Date.now() + path.extname(file.originalname);
        cb(null,filename);
    }
})

const upload = multer({storage});

router.get("/cart", [auth] ,productController.cart);
router.get("/product/add", productController.add);
router.get("/product/list", productController.list);
router.get("/product/:id",productController.detail);
router.get("/type/:id", productController.type);
router.get("/product/edit/:id",productController.edit);

router.post("/search", productController.search);
router.post("/product/create", [upload.any()] ,productController.create);
router.post("/delete", productController.delete);
router.post("/delete/:id", productController.delete);
router.post("/update/:id", productController.update);



module.exports = router;
