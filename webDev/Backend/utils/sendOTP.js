const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOTP = async (phoneNumber) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
    console.log('Generated OTP:', otp);

    // Send OTP via SMS
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,  // Your Twilio phone number
      to: phoneNumber,
    });

    console.log('OTP sent:', message.sid);
    return true;
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    return false;
  }
};

module.exports = sendOTP;
