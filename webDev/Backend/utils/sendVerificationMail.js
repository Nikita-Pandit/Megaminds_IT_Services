const nodemailer = require('nodemailer');
const dotenv=require("dotenv")
const config=dotenv.config()



const sendVerificationMail = async (email, token) => {
    console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

         // Dynamic base URL (use the correct domain for dev/prod)
         const baseUrl = process.env.BASE_URL || 'http://localhost:2000';

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification',
            html: `
            <h1>Email Verification</h1>
            <p>Please verify your email by clicking the link below:</p>
            <a href="${baseUrl}/verify?token=${token}">Verify Email</a>
        `,
        };
        

        const info = await transporter.sendMail(mailOptions);
        console.log(info)
        console.log('Verification email sent:', info.response);
        return true;

    } 
    
    catch (error) {
        console.error('Error sending email:', error.message);
        return false;
    }
};




const sendMail = async (email, token) => {
    console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

         // Dynamic base URL (use the correct domain for dev/prod)
         const baseUrl = process.env.BASE_URL || 'http://localhost:2000';

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification',
            html: `
            <h1>Email Verification</h1>
            <p>Please verify your email by clicking the link below:</p>
            <a href="${baseUrl}/admin/verify?token=${token}">Verify Email</a>
        `,
        };
        

        const info = await transporter.sendMail(mailOptions);
        console.log(info)
        console.log('Verification email sent:', info.response);
        return true;

    } 
    
    catch (error) {
        console.error('Error sending email:', error.message);
        return false;
    }
};

module.exports = {sendVerificationMail,sendMail};
