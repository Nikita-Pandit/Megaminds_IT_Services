const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  image: String,
  quantity: {
    type: Number,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  customerID: {  // Add reference to user
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'  // Reference your user model
  },
  cartItems: [cartItemSchema],  // Array of cart items
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const cartModel = mongoose.model("cartDetail", cartSchema);
module.exports = cartModel;