const customerModel= require("../models/customerModel")
const bcrypt=require("bcryptjs")
const adminModel=require("../models/AdminModel")
const customerResetPasswordController=async(req,res)=>{
    
    const { token, password } = req.body; 
    console.log("token1",token)
    console.log("password1",password)
    try {
        console.log("apple");
       const user = await customerModel.findOne({
         resetPasswordToken: token,
         resetPasswordExpires: { $gt: Date.now() }, // Check token expiration
       });
       console.log("customer in reset",user)
   
       if (!user) {
         return res.status(400).json({ message: 'Invalid or expired token.' });
       }
       user.password = password;
       // Clear the reset token and expiration
       user.resetPasswordToken = undefined;
       user.resetPasswordExpires = undefined;
   console.log(user)
       await user.save();
       console.log(user)
       try {
        await user.save();
        res.status(200).json({ message: 'Password reset successful.' });
    } catch (saveError) {
        console.error("Error saving user:", saveError);
        return res.status(500).json({ message: 'Error saving password.' });
    }
    } 
    catch (saveError) {
        console.error("Error saving user:", saveError);
        return res.status(500).json({ message: 'Error saving password.' });
    }

}

const adminResetPasswordController=async(req,res)=>{
    const { token, password } = req.body; 
    console.log("token2",token)
    console.log("password2",password)
    try {
       const user = await adminModel.findOne({
         resetPasswordToken: token,
         resetPasswordExpires: { $gt: Date.now() }, // Check token expiration
       });
    
   
       if (!user) {
         return res.status(400).json({ message: 'Invalid or expired token.' });
       }
       user.password = password;
       // Clear the reset token and expiration
       user.resetPasswordToken = undefined;
       user.resetPasswordExpires = undefined;
   console.log(user)
       await user.save();
       console.log(user)
       try {
        await user.save();
        res.status(200).json({ message: 'Password reset successful.' });
    } catch (saveError) {
        console.error("Error saving user:", saveError);
        return res.status(500).json({ message: 'Error saving password.' });
    }
    } 
    catch (saveError) {
        console.error("Error saving user:", saveError);
        return res.status(500).json({ message: 'Error saving password.' });
    }

}

module.exports={ customerResetPasswordController , adminResetPasswordController}