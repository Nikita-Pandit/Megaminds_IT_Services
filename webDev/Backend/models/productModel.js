
// const mongoose=require("mongoose")

// const productSchema=new mongoose.Schema({
//   stockCode:String,
//   stock:Number,
//   name:String,
//   description:String,
//   // quantity:Number,
//   price:Number,
//   // weight:Number,
//   //image_url:String,
//   category: 
//   { type: String}, // New field
// //  unit: { type: String, required: true }   ,
// image: { type: String},
// quantity:{
//   type:Number,
//   default:1
// }
// })

// const  productModel=mongoose.models.product || mongoose.model("product",productSchema)
// module.exports=productModel


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  stockCode: String,
  stock: Number,
  name: String,
  description: String,
  price: Number,
  category: { type: String },
  image: { type: String },
  quantity: { type: Number, default: 1 },
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
      rating: { type: Number, min: 1, max: 5 }
    }
  ],
  rating: { type: Number, default: 0 }
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
module.exports = productModel;
