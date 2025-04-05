const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const orderSchema = new mongoose.Schema({
  userID:
  {
    type:mongoose.Schema.Types.ObjectId, 
    ref:'customer',
    required:true
  },
  orderID: { 
    type: String, 
    unique: true, 
    default: () => uuidv4() // Generate a unique ID using UUID
  },
  customerDetails: {
    FullName: { type: String, required: true },
    LastName: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: Number, required: true },
    street: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true },
  },
  cart: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      stock:{type:Number,required:true},

    quantity:{
      type:Number,
      default:1,
      required:true
    }
    },
  ],
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

const  orderModel=mongoose.model("order",orderSchema)
module.exports=orderModel