
const crypto = require('crypto');
const customerModel=require("../models/customerModel")
const AdminModel=require("../models/AdminModel")
const sendVerificationMail = require('../utils/sendVerificationMail');
// const sendOTP = require('../utils/sendOTP'); 
const signUpController= async (req,res)=>{
   const {name,password,contact,email}=req.body
   console.log(req.body)
   const message=req.body
   try{
           // Check if the email already exists
         //   const existingCustomer = await customerModel.findOne({ email });
         //   if (existingCustomer) {
         //       return res.status(400).json({ success: false, message: 'Email already registered.' });
         //   }
                // Generate verification token
const verificationToken = crypto.randomBytes(32).toString('hex'); 
const verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000; // Token valid for 24 hours   
const customer= new  customerModel({
       name,
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

  //  if (verifyVia === 'email') {
  //     // Send verification email
  //     const emailSent = await sendVerificationMail(email, verificationToken);
  //     if (emailSent) {
  //       res.status(201).json({ message: 'User created. Verification email sent!' });
  //       console.log('User created. Verification email sent!');
  //     } else {
  //       res.status(500).json({ message: 'User created, but email not sent. Try again.' });
  //       console.log("User created, but email not sent. Try again.");
  //     }
  //   } else if (verifyVia === 'phone') {
  //     // Send OTP to the phone number
  //     const otpSent = await sendOTP(contact);
  //     if (otpSent) {
  //       res.status(201).json({ message: 'User created. OTP sent to phone!' });
  //       console.log('OTP sent to phone!');
  //     } else {
  //       res.status(500).json({ message: 'User created, but OTP not sent. Try again.' });
  //       console.log("User created, but OTP not sent. Try again.");
  //     }
  //   } else {
  //     res.status(400).json({ message: 'Invalid verification method selected' });
  //   }
   }

   catch(error){
      console.error('Error during signup:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error.' });
   }
   
   //res.status(201).json({ success: true, message: successMessage });
   }

 const adminSignupController=  async (req,res)=>{
   const {fullName,password,contact,email}=req.body
   console.log(req.body)

   try{
      const admin= new  AdminModel({
       fullName,
       email,
       password,
       contact
      })
      await admin.save()
      res.status(200).json({success:true})
   }
   catch(error){
      console.error("Failed to store customer details in the DB.",error.message)
      res.status(500).json({success:false,message:"Failed to store customer details in the DB.",error:error.message})
   }
   }
module.exports={signUpController,adminSignupController}