
const express=require("express")
const router=express.Router()

const {loginController}=require("../controllers/loginController")
router.post("/Login",loginController)
module.exports=router