const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controllers/users");
const multer = require("multer");
const auth = require("../middlewares/auth.js");
const userLogged = require("../middlewares/logged.js");
const isAdmin = require("../middlewares/isAdmin");

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'./public/images/uploads')
    },
    filename: (req,file,cb) => {
        let filename = 'image-'+Date.now()+path.extname(file.originalname);
        cb(null,filename)
    }
});

const upload = multer({storage});



router.get("/login-register", [userLogged] ,userController.loginRegister);
router.get("/profile", [auth] ,userController.profile);
router.get("/users/list", [auth,isAdmin] ,userController.list);

router.post("/access", userController.access);
router.post("/create", [upload.any()] ,userController.create);
router.post("/logout", userController.logout)
// router.post("/edit", userController.edit);
router.post("/delete/:id", [auth,isAdmin] ,userController.delete);

module.exports = router;