const express=require("express")
const router=express.Router()

const {signUpController}=require("../controllers/signUpController")
const {adminSignupController}=require("../controllers/signUpController")

router.post("/SignUp",signUpController)
router.post("/AdminSignUp",adminSignupController)

module.exports=router