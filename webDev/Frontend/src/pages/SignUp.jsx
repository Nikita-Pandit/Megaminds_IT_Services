


// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import { Link,useNavigate,useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 


// const SignUp = () => {
//   const navigate=useNavigate()
//   const location=useLocation()

  
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     console.log("queryParams",queryParams)
//     const id = queryParams.get('id');
//   console.log("id in signUp", id);
//     if (id) {
//       console.log('Id received from URL:', id);
//       localStorage.setItem("customerID",id)
//       //navigate("/Products");
//     //window.location.reload(); // Refresh to update the header
//     }
//   }, [location,navigate]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   // const [verifyVia, setVerifyVia] = useState('email'); // New state for verification method

//   // Access the backend URL from the environment variable
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("customer handlesubmit")
//       const response = await axios.post(`${backendUrl}/api/SignUp`, {
//         name,
//         email,
//         contact,
//         password,
//         // verifyVia, 
//       });
//       console.log(response.data);
//       if(response.data.success){
//         toast.success('Verification email sent! Please check your inbox.', {
//           style: { color: '#111' },
//         });
// //         setTimeout(()=>{
// // navigate("/Home")
// //         },7000)
//       }
      
//     } catch (error) {
//       console.error('Error sending verification email:', error);
//       toast.error('Failed to send verification email.', {
//         style: { color: '#111' },
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="flex form-container items-center justify-center">
//         <div className="border-2 bg-zinc-700 rounded-md p-5 border-blue-300">
//           <form
//             onSubmit={handleSubmit}
//             action=""
//             className="form flex items-center justify-center flex-col space-y-4"
//           >
//             <h1 className="text-3xl">Sign Up</h1>
//             <input
//               className="input-field bg-zinc-500 p-3"
//               type="text"
//               required
//               name="name"
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//             />
//             <input
//               className="input-field bg-zinc-500 p-3"
//               type="email"
//               name="email"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Kiit email"
//             />
//             <input
//               className="input-field bg-zinc-500 p-3"
//               type="tel"
//               name="contact"
//               required
//               onChange={(e) => setContact(e.target.value)}
//               placeholder="Enter Contact"
//             />
//             <input
//               className="input-field bg-zinc-500 p-3"
//               type="password"
//               name="password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Password"
//             />

//             <span className="flex flex-row gap-2">
//               <input type="checkbox" required />
//               <p className="input-p">
//                 I agree to the Terms and Conditions and Privacy Policy
//               </p>
//             </span>
//             <input
//               className="px-5 py-2 bg-blue-500 rounded-lg"
//               type="submit"
//               value="Sign up"
//             />
//           </form>

//           <p className="text-center mt-5">
//             Already have an account?
//             <span className="text-blue-500">
//               <Link to="/Login">&nbsp;Login</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import { UserPlus, Mail, Phone, Lock, User } from 'lucide-react';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const id = queryParams.get('id');
//     if (id) {
//       localStorage.setItem("customerID", id);
//     }
//   }, [location]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
//       const response = await axios.post(`${backendUrl}/api/SignUp`, {
//         name,
//         email,
//         contact,
//         password,
//       });

//       if (response.data.success) {
//         toast.success('Verification email sent! Please check your inbox.', {
//           style: { color: '#111' },
//         });
//       }
//     } catch (error) {
//       console.error('Error sending verification email:', error);
//       toast.error('Failed to send verification email.', {
//         style: { color: '#111' },
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" theme="dark" />
//       <div 
//         className="min-h-screen flex items-center justify-center p-4"
//         style={{
//           background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
//         }}
//       >
//         <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700/50 relative overflow-hidden">
//           {/* Decorative elements */}
//           <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          
//           <div className="relative z-10">
//             <div className="flex justify-center mb-8">
//               <div className="bg-blue-500/10 p-3 rounded-full">
//                 <UserPlus size={32} className="text-blue-400" />
//               </div>
//             </div>
            
//             <h1 className="text-3xl font-bold text-center text-white mb-2">Create Account</h1>
//             <p className="text-gray-400 text-center mb-8">Join our community today</p>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-4">
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                   <input
//                     className="w-full bg-gray-800/70 text-white pl-10 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition border border-gray-700/50"
//                     type="text"
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Full Name"
//                   />
//                 </div>
                
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                   <input
//                     className="w-full bg-gray-800/70 text-white pl-10 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition border border-gray-700/50"
//                     type="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email Address"
//                   />
//                 </div>
                
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                   <input
//                     className="w-full bg-gray-800/70 text-white pl-10 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition border border-gray-700/50"
//                     type="tel"
//                     required
//                     value={contact}
//                     onChange={(e) => setContact(e.target.value)}
//                     placeholder="Phone Number"
//                   />
//                 </div>
                
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                   <input
//                     className="w-full bg-gray-800/70 text-white pl-10 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition border border-gray-700/50"
//                     type="password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   required
//                   className="w-4 h-4 text-blue-500 border-gray-700 rounded focus:ring-blue-400 bg-gray-800/70"
//                 />
//                 <p className="text-sm text-gray-400">
//                   I agree to the{" "}
//                   <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
//                   {" "}and{" "}
//                   <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isLoading ? (
//                   <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 ) : (
//                   <>
//                     <UserPlus size={18} />
//                     <span>Create Account</span>
//                   </>
//                 )}
//               </button>
//             </form>

//             <p className="text-center mt-6 text-gray-400">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-400 hover:text-blue-300 transition duration-200">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
//-------------------------third----------------------



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import { UserPlus, Mail, Phone, Lock, User } from 'lucide-react';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const id = queryParams.get('id');
//     if (id) {
//       localStorage.setItem("customerID", id);
//     }
//   }, [location]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
//       const response = await axios.post(`${backendUrl}/api/SignUp`, {
//         name,
//         email,
//         contact,
//         password,
//       });

//       if (response.data.success) {
//         toast.success('Verification email sent! Please check your inbox.', {
//           style: { color: '#111' },
//         });
//       }
//     } catch (error) {
//       console.error('Error sending verification email:', error);
//       toast.error('Failed to send verification email.', {
//         style: { color: '#111' },
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 ">
//       <ToastContainer 
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
      
//       <div className="relative w-full max-w-md">
//         {/* Animated background elements */}
//         <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-1/4 -right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
//         {/* Main card */}
//         <div className="relative bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700/50">
//           {/* Decorative header */}
//           <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
//           <div className="px-8 py-10">
//             <div className="flex flex-col items-center mb-8">
//               <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
//                 <UserPlus className="text-white" size={28} />
//               </div>
//               <h1 className="mt-4 text-3xl font-bold text-white">Create Account</h1>
//               <p className="mt-2 text-gray-400">Join our community today</p>
//             </div>
            
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="space-y-4">
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <User className="text-gray-400 group-focus-within:text-blue-400 transition-colors" size={18} />
//                   </div>
//                   <input
//                     className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all border border-gray-600/50 hover:border-gray-500 group-focus-within:border-blue-400"
//                     type="text"
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Full Name"
//                   />
//                 </div>
                
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <Mail className="text-gray-400 group-focus-within:text-blue-400 transition-colors" size={18} />
//                   </div>
//                   <input
//                     className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all border border-gray-600/50 hover:border-gray-500 group-focus-within:border-blue-400"
//                     type="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email Address"
//                   />
//                 </div>
                
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <Phone className="text-gray-400 group-focus-within:text-blue-400 transition-colors" size={18} />
//                   </div>
//                   <input
//                     className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all border border-gray-600/50 hover:border-gray-500 group-focus-within:border-blue-400"
//                     type="tel"
//                     required
//                     value={contact}
//                     onChange={(e) => setContact(e.target.value)}
//                     placeholder="Phone Number"
//                   />
//                 </div>
                
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <Lock className="text-gray-400 group-focus-within:text-blue-400 transition-colors" size={18} />
//                   </div>
//                   <input
//                     className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all border border-gray-600/50 hover:border-gray-500 group-focus-within:border-blue-400"
//                     type="password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     aria-describedby="terms"
//                     type="checkbox"
//                     required
//                     className="w-4 h-4 bg-gray-700 rounded border-gray-600 focus:ring-3 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-light text-gray-400">
//                     I agree to the <a className="font-medium text-blue-400 hover:underline" href="#">Terms and Conditions</a> and <a className="font-medium text-blue-400 hover:underline" href="#">Privacy Policy</a>
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/20"
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     <span>Processing...</span>
//                   </>
//                 ) : (
//                   <>
//                     <UserPlus size={18} />
//                     <span>Create Account</span>
//                   </>
//                 )}
//               </button>
//             </form>

//             <div className="mt-6 text-center text-sm text-gray-400">
//               Already have an account?{" "}
//               <Link 
//                 to="/login" 
//                 className="font-medium text-blue-400 hover:text-blue-300 transition duration-200 hover:underline"
//               >
//                 Sign in here
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Add these styles for the animated blobs */}
//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SignUp;


//-------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
// import { FiSearch, FiShoppingCart } from 'react-icons/fi';
// import { PulseLoader } from 'react-spinners';

// const Products = ({ updateCartCount }) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getAllProductDetails = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`${backendUrl}/api/food/getProductDetails`);
//       const reversedProducts = response.data.allProductDetails.reverse();
//       setData(reversedProducts);
//       setFilteredData(reversedProducts);
//     } catch (error) {
//       console.error("Error in fetching productDetails", error);
//       setError("Failed to load products. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const addToCart = async (item) => {
//     if (item.stock <= 0) {
//       alert('This item is out of stock');
//       return;
//     }

//     try {
//       const response = await axios.post(`${backendUrl}/api/food/decreaseStock`, {
//         stockCode: item.stockCode,
//         quantity: 1
//       });

//       const updatedData = data.map(product => 
//         product.stockCode === item.stockCode 
//           ? {...product, stock: response.data.updatedStock}
//           : product
//       );
      
//       setData(updatedData);
//       setFilteredData(updatedData);
      
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const existingItemIndex = cart.findIndex(cartItem => cartItem.stockCode === item.stockCode);

//       if (existingItemIndex >= 0) {
//         cart[existingItemIndex].quantity += 1;
//       } else {
//         cart.unshift({...item, quantity: 1});
//       }
      
//       localStorage.setItem('cart', JSON.stringify(cart));
//       updateCartCount();
//       navigate('/Cart');
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       alert("Failed to add item to cart. Please try again.");
//     }
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
    
//     if (query) {
//       const filtered = data.filter((item) => 
//         item.description.toLowerCase().includes(query) || 
//         item.name.toLowerCase().includes(query)
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(data);
//     }
//   };

//   const viewProductDetails = (item) => {
//     navigate(`/product/${item.stockCode}`, { state: { product: item } });
//   };

//   useEffect(() => {
//     getAllProductDetails();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen" style={{ background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
//         <PulseLoader color="#4FD1C5" size={15} />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen" style={{ background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-8 hello">
//       {/* Header and Search */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto mb-12">
//           <h1 className="text-3xl font-bold text-center text-white mb-6">Our Products</h1>
//           <div className="relative">
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
//             <input
//               className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm text-white placeholder-gray-300 shadow-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
//               type="text"
//               placeholder="Search products by name or description..."
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </div>
//         </div>

//         {/* Products Grid */}
//         {filteredData.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredData.map((item) => (
//               <div 
//                 key={item.stockCode} 
//                 className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-700"
//               >
//                 {/* Image Container with fixed aspect ratio */}
//                 <div 
//                   className="relative pt-[100%] bg-gray-900 bg-opacity-30 cursor-pointer"
//                   onClick={() => viewProductDetails(item)}
//                 >
//                   <img 
//                     className="absolute top-0 left-0 w-full h-full object-contain p-4"
//                     src={`${backendUrl}/images/${item.image}`} 
//                     alt={item.name}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
//                     }}
//                   />
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4 flex flex-col flex-grow">
//                   <div className="flex-grow">
//                     <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
//                     <p className="text-gray-300 text-sm line-clamp-2 mb-3">{item.description}</p>
//                   </div>
                  
//                   <div className="mt-auto">
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-lg font-bold text-white">Rs {item.price}</span>
//                       <span className={`text-xs px-2 py-1 rounded-full ${
//                         item.stock > 0 ? 'bg-teal-900 bg-opacity-50 text-teal-200' : 'bg-red-900 bg-opacity-50 text-red-200'
//                       }`}>
//                         {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
//                       </span>
//                     </div>

//                     <button
//                       onClick={() => addToCart(item)}
//                       disabled={item.stock <= 0}
//                       className={`w-full py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center ${
//                         item.stock > 0 
//                           ? 'bg-teal-600 hover:bg-teal-700 text-white' 
//                           : 'bg-gray-700 text-gray-400 cursor-not-allowed'
//                       }`}
//                     >
//                       <FiShoppingCart className="mr-2" />
//                       {item.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm border border-gray-700">
//             <div className="text-gray-300 text-lg mb-4">No products found matching your search</div>
//             {searchQuery && (
//               <button
//                 onClick={() => {
//                   setSearchQuery('');
//                   setFilteredData(data);
//                 }}
//                 className="text-teal-400 hover:text-teal-300 underline"
//               >
//                 Clear search filters
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Add the style for the hello class */}
//       <style jsx>{`
//         .hello {
//           background: radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
//         }
//       `}</style>
//     </div>
//   );
// };

// Products.propTypes = {
//   updateCartCount: PropTypes.func.isRequired,
// };

// export default Products;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { UserPlus, Mail, Phone, Lock, User } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    if (id) {
      localStorage.setItem("customerID", id);
    }
  }, [location]);

  //   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     console.log("queryParams",queryParams)
//     const id = queryParams.get('id');
//   console.log("id in signUp", id);
//     if (id) {
//       console.log('Id received from URL:', id);
//       localStorage.setItem("customerID",id)
//       //navigate("/Products");
//     //window.location.reload(); // Refresh to update the header
//     }
//   }, [location,navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      const response = await axios.post(`${backendUrl}/api/SignUp`, {
        name,
        email,
        contact,
        password,
      });

      if (response.data.success) {
        toast.success('Verification email sent! Please check your inbox.', {
          style: { color: '#1111' },
        });
      }
    } catch (error) {
      console.error('Error sending verification email:', error);
      toast.error('Failed to send verification email.', {
        style: { color: '#111' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <div className="relative w-full max-w-md">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Main card */}
        <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>
          
          <div className="px-8 py-10">
            <div className="flex flex-col items-center mb-8">
              <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                <UserPlus className="text-white" size={28} />
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white">Create Account</h1>
              <p className="mt-2 text-gray-400">Join our community today</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    type="tel"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone Number"
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 bg-gray-700 rounded border-gray-600 focus:ring-3 focus:ring-indigo-400"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-400">
                    I agree to the <a className="font-medium text-indigo-400 hover:underline" href="#">Terms and Conditions</a> and <a className="font-medium text-indigo-400 hover:underline" href="#">Privacy Policy</a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium hover:opacity-90 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/20"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200 hover:underline"
              >
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add these styles for the animated blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SignUp;