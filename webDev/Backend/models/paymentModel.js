const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Reference to the orderModel
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'bankTransfer', 'other'], // Add other methods as needed
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['success', 'failed', 'pending'], // Add more statuses if needed
    required: true,
  },
  cardDetails: {
    cardNumber: {
      type: String,
      required: function() { return this.paymentMethod === 'card'; }, // Only required if payment is via card
    },
    expiryDate: {
      type: String,
      required: function() { return this.paymentMethod === 'card'; }, // Only required if payment is via card
    },
    cvv: {
      type: String,
      required: function() { return this.paymentMethod === 'card'; }, // Only required if payment is via card
    },
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});

const paymentModel = mongoose.model('Payment', paymentSchema);

module.exports = paymentModel;
