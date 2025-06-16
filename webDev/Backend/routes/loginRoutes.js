
const express=require("express")
const router=express.Router()

const {loginController, adminloginController}=require("../controllers/loginController")
router.post("/Login",loginController)
router.post("/admin/Login",adminloginController)
module.exports=router