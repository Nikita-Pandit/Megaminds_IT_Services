const mongoose=require("mongoose")

const adminSchema=new mongoose.Schema({
    fullName:String,
    password:String,
    contact:Number,
    email:String
})

const  AdminModel=mongoose.model("admin",adminSchema)
module.exports=AdminModel