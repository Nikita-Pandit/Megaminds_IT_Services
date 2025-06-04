
const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
  stockCode:String,
  stock:Number,
  name:String,
  description:String,
  // quantity:Number,
  price:Number,
  // weight:Number,
  //image_url:String,
  category: 
  { type: String}, // New field
//  unit: { type: String, required: true }   ,
image: { type: String},
quantity:{
  type:Number,
  default:1
}
})

const  productModel=mongoose.models.product || mongoose.model("product",productSchema)
module.exports=productModel

