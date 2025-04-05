
const express=require("express")
const router=express.Router()

const {orderController,getPayment}=require("../controllers/orderController")
router.post("/orders/:id",orderController)
router.post("/orders/:orderID",getPayment)
module.exports=router