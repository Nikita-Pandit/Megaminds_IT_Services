const orderModel=require("../models/orderModel")
const paymentModel=require("../models/paymentModel")
const customerModel=require("../models/customerModel")
const orderController=async(req,res)=>{
  
const {customerDetails,finalCart,totalPrice}=req.body
console.log("Requested body is",req.body)
const {id}=req.params;
console.log("finalCart",finalCart);
try{
  const customer=await customerModel.findOne({_id:id})
    const order=new orderModel({
        customerDetails,
        cart: finalCart,
        totalPrice,
        orderDate: new Date(),   
        userID:customer._id 
    })
    await order.save()
    res.status(201).json({ message: "Order placed successfully", order });
}
catch(error){
    console.error("Order error")
    res.status(500).json({ message: "Internal Server Error", error });
}
}
const getPayment=async(req,res)=>{
const {orderID} =req.params
const { paymentMethod, cardDetails } = req.body;
try {
    // Fetch the order details from the database
    const order = await orderModel.findById(orderID);
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Simulate the payment processing (you can integrate with a payment gateway here)
    let paymentStatus = 'failed'; // Default to failed
    if (paymentMethod === 'card') {
      // Here we mock a successful payment processing (you can integrate with a real payment gateway)
      paymentStatus = 'success'; 
      console.log("Payment processed successfully", cardDetails); // Mock processing
    }

    // Create a new payment entry in the database
    const payment = new paymentModel({
      orderID,
      paymentMethod,
      paymentStatus,
      cardDetails: paymentMethod === 'card' ? cardDetails : undefined,
      paymentDate: new Date(),
    });
    
    await payment.save();

    // Update the order status to reflect the payment status
    order.paymentStatus = paymentStatus;
    await order.save();

    res.status(200).json({
      message: "Payment processed successfully",
      paymentStatus,
      order,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
module.exports={orderController,getPayment}