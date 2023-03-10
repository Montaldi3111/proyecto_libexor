const express = require('express');
const router = express.Router();
const path = require("path");
const productController = require("../controllers/product");
const multer = require("multer");
const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin");

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
router.get("/product/add", [auth, isAdmin] ,productController.add);
router.get("/product/list", [auth, isAdmin] ,productController.list);
router.get("/product/:id",productController.detail);
router.get("/type/:id", productController.type);
router.get("/product/edit/:id", [auth,isAdmin,upload.any()] ,productController.edit);

router.post("/search", productController.search);
router.post("/product/create", [auth,isAdmin,upload.any()] ,productController.create);
router.post("/delete/:id", [auth,isAdmin] ,productController.delete);
router.post("/update/:id", [auth,isAdmin,upload.any()] ,productController.update);



module.exports = router;
