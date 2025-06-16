const express=require("express")
const router=express.Router()

const {customerResetPasswordController, adminResetPasswordController}=require("../controllers/resetPasswordController")

router.post("/customer/reset",customerResetPasswordController)

router.post("/admin/reset-password",adminResetPasswordController)

module.exports=router