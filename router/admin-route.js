const express=require("express");
const  {adminUser,adminContect, deleteUser, getUser,updateUser, deleteContect}  = require("../controlers/admin-controler");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware=require("../middlewares/admin-middleware");


const router=express.Router();

router.route("/user").get(authMiddleware,adminMiddleware,adminUser);

router.route("/contect").get(authMiddleware,adminMiddleware,adminContect);

router.route("/user/:id").get(authMiddleware,adminMiddleware,getUser);

router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,updateUser);

router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,deleteUser);

router.route("/contect/delete/:id").delete(authMiddleware,adminMiddleware,deleteContect);



module.exports=router;