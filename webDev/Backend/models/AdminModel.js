const mongoose=require("mongoose")
const bcrypt = require("bcryptjs");

const adminSchema=new mongoose.Schema({
    name:{ type: String, required: true },
    userName:{
        type:String,
        required: true
    },
    password: { type: String, required: true },
    contact:{ type: Number, required: true },
    email:{ type: String, required: true},
    isVerified:{
        type: Boolean, default: false  
    },
    verificationToken:{
        type:String,
    },
    verificationTokenExpiry: { type: Date },
    resetPasswordToken: { type: String }, // Optional
    resetPasswordExpires: { type: Date }, // Optional
})

// Hash password before saving
adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});



const  adminModel=mongoose.model("admin",adminSchema)
module.exports=adminModel