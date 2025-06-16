
const crypto = require('crypto');
const customerModel=require("../models/customerModel")
const adminModel=require("../models/AdminModel")
const {sendVerificationMail, sendMail} = require('../utils/sendVerificationMail');
// const sendOTP = require('../utils/sendOTP'); 
const signUpController= async (req,res)=>{

   const {name,userName,password,contact,email}=req.body
   console.log(req.body)
   const message=req.body
   try{
        
const verificationToken = crypto.randomBytes(32).toString('hex'); 
const verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000; // Token valid for 24 hours   
const customer= new  customerModel({
       name,
       userName, 
       email,
       password,
       contact,
       verificationToken,
       verificationTokenExpiry
      })
      await customer.save()
      console.log(customer.password)

      //Send verification email
      const emailSent = await sendVerificationMail(email, verificationToken);
      if (emailSent) {
         res.status(201).json({success:true, message: 'User created. Verification email sent!' });
         console.log('User created. Verification email sent!')
     } else {
         res.status(500).json({ message: 'User created, but email not sent. Try again.' });
         console.log(" 'User created, but email not sent. Try again.' ")
     }
   }

   catch(error){
      console.error('Error during signup:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error.' });
   }
   
   //res.status(201).json({ success: true, message: successMessage });
   }



 const adminSignupController=  async (req,res)=>{
   const {name,userName, password,contact,email}=req.body
   console.log(req.body)
   const message=req.body
   try{
const verificationToken = crypto.randomBytes(32).toString('hex'); 
const verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000; // Token valid for 24 hours   

const admin= new  adminModel({
       name,
       userName,
       email,
       password,
       contact,
       verificationToken,
       verificationTokenExpiry
      })
      console.log("After", admin)
      await admin.save()


      //Send verification email
      const emailSent = await sendMail(email, verificationToken);
      if (emailSent) {
         res.status(201).json({success:true, message: 'User created. Verification email sent!' });
         console.log('User created. Verification email sent!')
     } else {
         res.status(500).json({ message: 'User created, but email not sent. Try again.' });
         console.log(" 'User created, but email not sent. Try again.' ")
     }
   }

   catch(error){
      console.error('Error during signup:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error.' });
   }
   }

module.exports={signUpController,adminSignupController}