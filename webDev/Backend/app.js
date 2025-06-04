const express=require("express")
const app=express()

const mongoose=require("mongoose")

const dotenv=require("dotenv")
const config=dotenv.config()

const cors=require("cors")
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json()) 

// const passport = require('passport');
// const session = require('cookie-session');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;


const PORT=process.env.PORT
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected successfully"))
.catch(err => console.error('Error connecting to MongoDB:', err));


const signUpRoutes=require("./routes/signUpRoutes")
const loginRoutes=require("./routes/loginRoutes")
const productRoutes=require("./routes/productRoutes")
const orderRoutes=require("./routes/orderRoutes")
const forgotPasswordRoutes=require("./routes/forgotPasswordRoutes")
const resetPasswordRoutes=require("./routes/resetPasswordRoutes")

const customerModel=require("./models/customerModel")
//api endpoints
app.use("/api",signUpRoutes)
app.use("/api",loginRoutes)
app.use("/api/food",productRoutes)
app.use("/images",express.static('uploads'))
app.use("/api",orderRoutes)
app.use("/api",forgotPasswordRoutes)
app.use("/api",resetPasswordRoutes)


const frontendUrl=process.env.FRONTEND_URL ||  'http://localhost:5173'

console.log(frontendUrl)
app.get('/verify', async (req, res) => {
  const { token } = req.query;
  console.log("token",token);
  try {
    console.log("verify route 2")
      // Find the user with the token
      const userIDMatchWithToken=await customerModel.findOne({verificationToken: token})
console.log(userIDMatchWithToken)
      const user = await customerModel.findOneAndUpdate(
        
          { verificationToken: token },
          { isVerified: true, verificationToken: null },
          { new: true }
      );
      // console.log("Before SignUp",user)
       await user.save()
      console.log("After SignUp",user)
      if (!user) {
          return res.status(400).json({ message: 'Invalid or expired token',user });
      }
      // res.json({ message: 'Email verified successfully!' });
       //return res.redirect(`http://localhost:5178/SignUp?id=${userIDMatchWithToken._id}`);
      // return res.redirect(`${frontendUrl}/SignUp?id=${user._id}`);
    res.redirect(`${frontendUrl}/?id=${user._id}`);

  } catch (error) {
      console.error('Error during verification:', error);
      res.status(400).json({ error: 'Verification failed' });
  }
})

//Middleware for session handling
// app.use(
//     session({
//       name: 'social-login-session',
//       keys: [process.env.SESSION_SECRET || 'secretKey'],
//       maxAge: 24 * 60 * 60 * 1000, // 24 hours
//     })
//   );

  //Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

//Serialize and Deserialize User
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

//Google OAuth Strategy
// passport.use(
//     new GoogleStrategy(
//       {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`,
//       },
//       (accessToken, refreshToken, profile, done) => {
//         console.log('Google Profile:', profile);
//         // Here, you could save the user to your database
//         return done(null, profile);
//       }
//     )
//   );
//Google Authentication Route
// app.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// //Google Callback Route
// app.get(
//     '/api/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//       // Successful authentication
//       res.redirect(`${process.env.FRONTEND_URL}/Home`);
//     }
//   );

  const orderModel=require("./models/orderModel")
// Add a new order
// app.get("/api/userPlacedOrdersInAdminDashboard", async (req, res) => {
//   try {
//    const fetchPlacedOrders=await orderModel.find()
//    console.log("fetchPlacedOrders",fetchPlacedOrders)
//    res.json({fetchPlacedOrders, success:true})





//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
app.get("/api/userPlacedOrdersInAdminDashboard", async (req, res) => {
  try {
    console.log("Fetching orders...");
    const fetchPlacedOrders = await orderModel.find();
    console.log("Orders fetched:", fetchPlacedOrders.cart);

    res.json({ fetchPlacedOrders, success: true });
  } catch (err) {
    console.error("Error in fetching orders:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const productModel=require("./models/productModel")
// Decrease stock
app.post('/api/food/decreaseStock', async (req, res) => {
  try {
    const { stockCode, quantity } = req.body;
    const product = await productModel.findOne({ stockCode });
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    if (product.stock < quantity) {
      return res.status(400).json({ error: 'Not enough stock' });
    }
    
    product.stock -= quantity;
    await product.save();
    
    res.json({ 
      success: true,
      updatedStock: product.stock
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Check stock
app.post('/api/food/checkStock', async (req, res) => {
  try {
    const { stockCode } = req.body;
    const product = await productModel.findOne({ stockCode });
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ 
      availableStock: product.stock
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/food/increaseStock",async(req,res)=>{
  const { stockCode, quantity } = req.body;
  try {
    const product = await productModel.findOne({ stockCode });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    product.stock += quantity;
    await product.save();
    res.status(200).json({ 
      success: true, 
      updatedStock: product.stock 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
})



const cartModel = require('./models/cartModel'); // Import your cart model

app.post("/api/fetchCartDetails", async (req, res) => {
  try {
    const { cartData,customerID } = req.body;
    console.log("Received cart data:", cartData);
    if (!Array.isArray(cartData)) {
      return res.status(400).json({ error: "cartData must be an array" });
    }

  // Then create a new cart with all items
  const newCart = await cartModel.create({
    customerID,
    cartItems: cartData.map(item => ({
      name: item.name,
      price: item.price,
      stock: item.stock,
      image: item.image,
      quantity: item.quantity || 1
    }))
  });

  console.log("Created new cart k cartItems:", newCart.cartItems);

  res.status(201).json({ 
    success:true,
    message: "Cart created successfully",
    cart: 
      {
        items: newCart.cartItems // Match frontend structure
      
    }
  });
  } catch (error) {
    console.error("Error saving cart data:", error);
    res.status(500).json({ error: "Failed to save cart data" });
  }
});




// POST /api/food/rateProduct
// app.post('/api/food/rateProduct', async (req, res) => {
//   const { stockCode, rating, userID } = req.body;

//   try {
//     const product = await productModel.findOne({ stockCode });
//     if (!product) return res.status(404).json({ message: 'Product not found' });

//     // Optional: Prevent multiple ratings from the same user
//     const existingRating = product.ratings.find(r => r.userID.toString() === userID);
//     consol
//     if (existingRating) {
//       existingRating.rating = rating;
//     } else {
//       product.ratings.push({ userID, rating });
//     }

//     // Recalculate average rating
//     const total = product.ratings.reduce((acc, r) => acc + r.rating, 0);
//     product.averageRating = total / product.ratings.length;

//     await product.save();
//     res.json({ message: 'Rating submitted', averageRating: product.averageRating });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

app.post('/api/food/rateProduct', async (req, res) => {
  const { productId, userId, rating } = req.body;

  try {
    const product = await productModel.findById({_id:productId});
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Check if user has already rated
    const existingRating = product.ratings.find(r => r.userId.toString() === userId);
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      product.ratings.push({ userId, rating });
    }

    // Calculate average rating
    const total = product.ratings.reduce((sum, r) => sum + r.rating, 0);
    product.rating = total / product.ratings.length;

    await product.save();
    res.json({ message: 'Rating submitted successfully', rating: product.rating });
  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT,()=>{
    console.log(`server is listening at PORT ${PORT}`)
})