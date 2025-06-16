const express=require("express")
const router=express.Router()

const {forgotPasswordController, adminForgotPasswordController}=require("../controllers/forgotPasswordController")
router.post("/forgot-password",forgotPasswordController)
router.post("/admin/forgot-password",adminForgotPasswordController)
module.exports=router