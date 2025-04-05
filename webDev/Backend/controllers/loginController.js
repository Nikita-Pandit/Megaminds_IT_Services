const customerModel=require("../models/customerModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cartModel=require("../models/cartModel");
const loginController=async (req,res)=>{
 const {email,password}=req.body
try{
    const customer= await customerModel.findOne({email})
    console.log(password)
    console.log(customer.password)
    const cart=await cartModel.findOne({customerID:customer._id})
    // console.log("-------------------cart in login------------------",cart);
    // console.log("-------------------cart in login------------------",cart.cartItems);
    if(customer){
       
         const isPasswordValid =  await bcrypt.compare(password,customer.password)
         if(isPasswordValid){
            // If password matches, send a success response

            const token=jwt.sign(
                {customerID:customer._id,email:customer.email},
                process.env.JWT_SECRET_KEY, 
                { expiresIn: '1h' }  // Expiration time (optional)
            )
            if(cart){
              return  res.status(200).json({ success: true, message: "Login successful", token, userID:customer._id,
               cart:cart
            });
            }
           else return  res.status(200).json({ success: true, message: "Login successful", token, userID:customer._id });
         }
         else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
          }
    }
    else {
        res.status(404).json({ success: false, message: "No record found in the DB." });
      }
}
catch(error){
    console.error("Something went wrong", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
}
}
module.exports={loginController}