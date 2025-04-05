

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {

//     // Access the backend URL from the environment variable
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const navigate = useNavigate();

//   const isEmailValid = email.includes('@');
//   const isPasswordValid = password.length >= 4;
//   const isFormValid = isEmailValid && isPasswordValid;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     console.log(email)
//     console.log(password)
//     try {
//       const response = await axios.post(`${backendUrl}/api/Login`, { email, password });
//       console.log("response.data.cart.cartItems",response.data.cart?.cartItems);
//       if(response.data.token){
//         if (rememberMe) {
//           localStorage.setItem('token', response.data.token);
//           localStorage.setItem('customerID', response.data.userID);
//           if (response.data.cart && response.data.cart.cartItems) {
//             localStorage.setItem("cart", JSON.stringify(response.data.cart.cartItems));
//           } else {
//             localStorage.setItem("cart", JSON.stringify([]));
//           }
//         } else {
//           sessionStorage.setItem('token', response.data.token);
//           sessionStorage.setItem('customerID', response.data.userID);
//           if (response.data.cart && response.data.cart.cartItems) {
//             localStorage.setItem("cart", JSON.stringify(response.data.cart.cartItems));
//           } else {
//             localStorage.setItem("cart", JSON.stringify([]));
//           }
//         }
//         toast.success('Login Successful');
//         setTimeout(()=>{
//  navigate('/Home');
//  window.location.reload(); // Refresh to update the header
//         },3000)
       
//       }
//   else{
//     toast.error('Invalid credentials. Please try again.');
//   }
//     } catch (error) {
//       if (error.response?.status === 401) {
//         toast.error('Invalid credentials. Please try again.');
//       } else {
//         toast.error('An error occurred. Please try again later.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!isEmailValid) {
//       toast.error('Please enter a valid email to reset your password.');
//       return;
//     }
//     console.log(email)
//     try {
//       const response= await axios.post(`${backendUrl}/api/forgot-password`, { email });
//       toast.success('Password reset link sent to your email.');
//       console.log(response.data)

//     } catch (error) {
//       toast.error('Failed to send password reset link. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="flex form-container items-center justify-center min-h-screen">
//         <div className="border-2 bg-zinc-700 rounded-md p-5 border-blue-300">
//           <form
//             onSubmit={handleSubmit}
//             className="form p-5 flex items-center justify-center flex-col space-y-4"
//           >
//             <h1 className="text-3xl text-white">Log in</h1>
//             <input
//               className="input-field bg-zinc-500 p-3 text-white"
//               type="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//             {!isEmailValid && email && (
//               <small className="text-red-500">Please enter a valid email.</small>
//             )}
//             <div className="relative w-full">
//               <input
//                 className="input-field bg-zinc-500 p-3 text-white w-full"
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-white"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//             {!isPasswordValid && password && (
//               <small className="text-red-500">Password must be at least 6 characters long.</small>
//             )}
//             <label className="text-white">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={rememberMe}
//                 onChange={() => setRememberMe(!rememberMe)}
//               />
//               Remember Me
//             </label>
//             <button
//               type="submit"
//               className="px-5 py-2 bg-blue-500 rounded-lg text-white"
//               disabled={!isFormValid || loading}
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//             <button
//               type="button"
//               onClick={handleForgotPassword}
//               className="text-blue-500 underline mt-2"
//             >
//               Forgot password?
//             </button>
//           </form>
//           {/* <p className="text-center mt-5 text-white">
//             Or log in using:
//             <br />
//             <button
//               onClick={() => handleSocialLogin('google')}
//               className="bg-red-500 px-4 py-2 rounded-lg text-white mt-2"
//             >
//               Google
//             </button>
//             &nbsp;
//             <button
//               onClick={() => handleSocialLogin('facebook')}
//               className="bg-blue-600 px-4 py-2 rounded-lg text-white mt-2"
//             >
//               Facebook
//             </button>
//           </p> */}
//           <p className="text-center mt-5 text-white">
//             Don't have an account?
//             <span className="text-blue-500">
//               <Link to="/SignUp">&nbsp;SignUp</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${backendUrl}/api/Login`, { email, password });
      
      if(response.data.token){
        if (rememberMe) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('customerID', response.data.userID);
          if (response.data.cart?.cartItems) {
            localStorage.setItem("cart", JSON.stringify(response.data.cart.cartItems));
          } else {
            localStorage.setItem("cart", JSON.stringify([]));
          }
        } else {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('customerID', response.data.userID);
          if (response.data.cart?.cartItems) {
            localStorage.setItem("cart", JSON.stringify(response.data.cart.cartItems));
          } else {
            localStorage.setItem("cart", JSON.stringify([]));
          }
        }
        toast.success('Login Successful');
        setTimeout(() => {
          navigate('/Home');
          window.location.reload();
        }, 2000);
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Invalid credentials. Please try again.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!isEmailValid) {
      toast.error('Please enter a valid email to reset your password.');
      return;
    }
    try {
      await axios.post(`${backendUrl}/api/forgot-password`, { email });
      toast.success('Password reset link sent to your email.');
    } catch (error) {
      toast.error('Failed to send password reset link. Please try again later.');
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
                <Mail className="text-white" size={28} />
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white">Welcome Back</h1>
              <p className="mt-2 text-gray-400">Log in to your account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
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
                {!isEmailValid && email && (
                  <small className="text-red-400">Please enter a valid email.</small>
                )}
                
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {!isPasswordValid && password && (
                  <small className="text-red-400">Password must be at least 4 characters long.</small>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 bg-gray-700 rounded border-gray-600 focus:ring-3 focus:ring-indigo-400"
                  />
                  <label htmlFor="remember-me" className="ml-3 text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition duration-200 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || loading}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium hover:opacity-90 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/20"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Logging in...</span>
                  </>
                ) : (
                  <span>Log in</span>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link 
                to="/SignUp" 
                className="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200 hover:underline"
              >
                Sign up here
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

export default Login;

