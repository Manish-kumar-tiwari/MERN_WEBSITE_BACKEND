const express=require("express");
const router=express.Router();

const contectAuth=require("../controlers/contect-controler");


router.route("/contect").post(contectAuth);

module.exports=router;