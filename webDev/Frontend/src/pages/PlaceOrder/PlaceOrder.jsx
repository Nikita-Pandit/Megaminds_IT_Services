// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const PlaceOrder = () => {

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
// const id=localStorage.getItem('customerID')
//   const navigate = useNavigate();
//   const [isCart, setIsCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [deliveryFee, setDeliveryFee] = useState(50);
//   const [customerDetails, setCustomerDetails] = useState({
//     FullName: '',
//     LastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     phone: '',
//   });

//   useEffect(() => {

//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     console.log("savedCart",savedCart)
//     setIsCart(savedCart);

//     const total = savedCart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerDetails({ ...customerDetails, [name]: value });
//   };

//   const validateForm = () => {
//     const { FullName, email, phone, street, city, state, zipCode, country } = customerDetails;
//     if (!FullName || !email || !phone || !street || !city || !state || !zipCode || !country) {
//       alert('Please fill in all required fields.');
//       return false;
//     }
//     return true;
//   };

//   const handlePlaceOrder = async () => {
//     if (!validateForm()) return;
// console.log("first");
//     try {
//       console.log("second")
//       const formattedCart = isCart.map(({ name, price, stock, quantity }) => ({
//         name,
//         price,
//         stock,
//         quantity
//       }));
//       const order = {
//         customerDetails,
//         finalCart:formattedCart,
//         totalPrice: totalPrice + deliveryFee,
//       };
// console.log("Before first cart info",order.finalCart);
//      const response= await axios.post(`${backendUrl}/api/orders/${id}`, order) 
//       alert('Order placed successfully!');
//       console.log("middle cart info", response.data.cart)
//       localStorage.removeItem('cart');
//       console.log("After cart info", response.data.Cart)
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('Failed to place the order. Please try again.');
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-5">Place Your Order</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Customer Details Form */}
//         <div>
//           <h3 className="text-lg font-bold mb-3">Customer Details</h3>   
//             <form className="flex flex-col gap-4">
//   {/* Name Fields */}
//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="FullName"
//       placeholder="Full Name"
//       value={customerDetails.FullName}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//     <input
//       type="text"
//       name="LastName"
//       placeholder="Last Name"
//       value={customerDetails.LastName}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//   </div>
  
//   <div className="flex flex-row gap-5">
//     <input
//       type="email"
//       name="email"
//       placeholder="Email Address"
//       value={customerDetails.email}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />

//   </div>

//   {/* Address Fields */}
//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="street"
//       placeholder="Street"
//       value={customerDetails.street}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//     <input
//       type="text"
//       name="city"
//       placeholder="City"
//       value={customerDetails.city}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//   </div>

//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="state"
//       placeholder="State"
//       value={customerDetails.state}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
   
//   </div>

//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="country"
//       placeholder="Country"
//       value={customerDetails.country}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//      <input
//       type="text"
//       name="zipCode"
//       placeholder="Zip Code"
//       value={customerDetails.zipCode}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//   </div>
//   <div className="flex flex-row gap-5">
//       <input
//       type="tel"
//       name="phone"
//       placeholder="Phone"
//       value={customerDetails.phone}
//       onChange={handleInputChange}
//       className="p-2 border bg-zinc-800 border-none outline-none rounded flex-1"
//     />
//   </div>
// </form>

//         </div>

//         {/* Order Summary */}
//         <div>
//           <h3 className="text-lg font-bold mb-3">Order Summary</h3>
//           <div className="bg-zin-500 p-4 rounded shadow">
//             <ul className="divide-y divide-gray-300">
//               {isCart.map((item, index) => (
//                 <li key={index} className="py-2 flex justify-between">
//                   <span>{item.name} (x{item.quantity})</span>
//                   <span>Rs {item.price * item.quantity}</span>
//                 </li>
//               ))}
//             </ul>
//             <hr className="my-3" />
//             <div className="flex justify-between">
//               <span>Subtotal:</span>
//               <span>Rs {totalPrice}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee:</span>
//               <span>Rs {totalPrice === 0 ? 0 : deliveryFee}</span>
//             </div>
//             <hr className="my-3" />
//             <div className="flex justify-between font-bold">
//               <span>Total:</span>
//               <span>Rs {totalPrice === 0 ? 0 : totalPrice + deliveryFee}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         className="mt-5 bg-green-500 text-white px-4 py-2 rounded"
//         onClick={handlePlaceOrder}
//         disabled={isCart.length === 0}
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default PlaceOrder;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, MapPin, Home, Phone, CreditCard } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const id = localStorage.getItem('customerID');
  const navigate = useNavigate();
  const [isCart, setIsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(50);
  const [isLoading, setIsLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    FullName: '',
    LastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setIsCart(savedCart);

    const total = savedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const validateForm = () => {
    const { FullName, email, phone, street, city, state, zipCode, country } = customerDetails;
    if (!FullName || !email || !phone || !street || !city || !state || !zipCode || !country) {
      toast.error('Please fill in all required fields.', {
        style: { color: '#fff', background: '#ef4444' },
      });
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const formattedCart = isCart.map(({ name, price, stock, quantity }) => ({
        name,
        price,
        stock,
        quantity
      }));
      
      const order = {
        customerDetails,
        finalCart: formattedCart,
        totalPrice: totalPrice + deliveryFee,
      };

      const response = await axios.post(`${backendUrl}/api/orders/${id}`, order);
      
      toast.success('Order placed successfully!', {
        style: { color: '#fff', background: '#10b981' },
      });
      
      localStorage.removeItem('cart');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place the order. Please try again.', {
        style: { color: '#fff', background: '#ef4444' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-gray-900 to-gray-800">
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
      
      <div className="relative max-w-6xl mx-auto">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Main card */}
        <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Complete Your Order</h2>
            <p className="text-gray-400 mb-6">Please fill in your details to proceed</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Customer Details Form */}
              <div>
                <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
                  <User size={20} />
                  <span>Customer Information</span>
                </h3>
                
                <form className="space-y-4">
                  <div className="flex gap-4">
                    <div className="relative group flex-1">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                      </div>
                      <input
                        type="text"
                        name="FullName"
                        placeholder="Full Name"
                        value={customerDetails.FullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <div className="relative group flex-1">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                      </div>
                      <input
                        type="text"
                        name="LastName"
                        placeholder="Last Name"
                        value={customerDetails.LastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={customerDetails.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-5 text-white flex items-center gap-2">
                    <MapPin size={20} />
                    <span>Shipping Address</span>
                  </h3>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Home className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    </div>
                    <input
                      type="text"
                      name="street"
                      placeholder="Street Address"
                      value={customerDetails.street}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="relative group flex-1">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={customerDetails.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <div className="relative group flex-1">
                      <input
                        type="text"
                        name="state"
                        placeholder="State/Province"
                        value={customerDetails.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="relative group flex-1">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={customerDetails.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <div className="relative group flex-1">
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP/Postal Code"
                        value={customerDetails.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Order Summary */}
              <div>
                <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
                  <CreditCard size={20} />
                  <span>Order Summary</span>
                </h3>
                
                <div className="bg-gray-700/40 p-6 rounded-lg border border-gray-600/30">
                  <div className="max-h-96 overflow-y-auto pr-2">
                    <ul className="divide-y divide-gray-600/50">
                      {isCart.map((item, index) => (
                        <li key={index} className="py-4 flex justify-between items-center">
                          <div>
                            <span className="text-white">{item.name}</span>
                            <span className="block text-sm text-gray-400">Qty: {item.quantity}</span>
                          </div>
                          <span className="text-white">Rs {item.price * item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal:</span>
                      <span>Rs {totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Delivery Fee:</span>
                      <span>Rs {totalPrice === 0 ? 0 : deliveryFee}</span>
                    </div>
                    <div className="border-t border-gray-600/50 my-3"></div>
                    <div className="flex justify-between text-lg font-bold text-white">
                      <span>Total:</span>
                      <span>Rs {totalPrice === 0 ? 0 : totalPrice + deliveryFee}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isCart.length === 0 || isLoading}
                    className={`mt-6 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${(isCart.length === 0 || isLoading) ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/20`}
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
                        <span>Place Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
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

export default PlaceOrder;
