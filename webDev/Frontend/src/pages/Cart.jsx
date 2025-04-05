
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from "axios"
// import { useNavigate } from 'react-router-dom';
// const Cart = ({ updateCartCount }) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const navigate=useNavigate()
//   const [products, setProducts] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
 
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

//  console.log("savedCart",savedCart)
//     const updatedCart = savedCart.map(item => ({
//       ...item,
//        quantity: item.quantity || 1, // Default to 1 if displayQuantity is not set
//     }));

//     setProducts(updatedCart);
//     calculateTotalPrice(updatedCart);
//   }, []);


//   const saveCartToLocalStorage = (cart) => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   };


//   const calculateTotalPrice = (cart) => {
//     const total = cart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   };

// const decreaseQuantity=async (index)=>{
//   const updatedCart = [...products];
//   const item = updatedCart[index];
//   if (item.quantity > 1) {
//     //item.quantity -= 1;
//     const response = await axios.post(`${backendUrl}/api/food/increaseStock`, {
//       stockCode: item.stockCode,
//       quantity: 1
//     });
    
//     updatedCart[index].quantity -= 1;
//     updatedCart[index].stock = response.data.updatedStock;
//   } else {
//   updatedCart.splice(index, 1);
//   await axios.post(`${backendUrl}/api/food/increaseStock`, {
//     stockCode: item.stockCode,
//     quantity: item.quantity
//   });
//   updatedCart.splice(index, 1);
//   }
//   setProducts(updatedCart);
//   saveCartToLocalStorage(updatedCart);
//   updateCartCount();
//   calculateTotalPrice(updatedCart);
// }
// // const increaseQuantity=(index)=>{
  
// //   const updatedCart = [...products];
// //     if (updatedCart[index].quantity < updatedCart[index].stock) {
// //       updatedCart[index].quantity += 1;
// //     }
// //     setProducts(updatedCart);
// //     saveCartToLocalStorage(updatedCart);
// //     calculateTotalPrice(updatedCart); 
// // }


// const increaseQuantity = async (index) => {
//   try {
//     const updatedCart = [...products];
//     const item = updatedCart[index];
    
//     if (item.quantity < item.stock) {
//       const response = await axios.post(`${backendUrl}/api/food/decreaseStock`, {
//         stockCode: item.stockCode,
//         quantity: 1
//       });
      
//       updatedCart[index].quantity += 1;
//       updatedCart[index].stock = response.data.updatedStock;
      
//       setProducts(updatedCart);
//       saveCartToLocalStorage(updatedCart);
//       calculateTotalPrice(updatedCart);
//     } else {
//       alert("Cannot add more than available stock");
//     }
//   } catch (error) {
//     console.error("Error increasing quantity:", error);
//     alert("Failed to update quantity");
//   }
// };
//   // const removeFromCart = (stockCode) => {

//   //   const updatedCart = products.filter(item => item.stockCode !== stockCode);
//   //   setProducts(updatedCart);
//   //   saveCartToLocalStorage(updatedCart);
//   //   updateCartCount();
//   //   calculateTotalPrice(updatedCart);
   
//   // };
  
//   const removeFromCart = async (stockCode) => {
//     try {
//       const item = products.find(p => p.stockCode === stockCode);
//       if (item) {
//         // Return all quantity to stock when removing
//         await axios.post(`${backendUrl}/api/food/increaseStock`, {
//           stockCode,
//           quantity: item.quantity
//         });
//       }
      
//       const updatedCart = products.filter(item => item.stockCode !== stockCode);
//       setProducts(updatedCart);
//       saveCartToLocalStorage(updatedCart);
//       updateCartCount();
//       calculateTotalPrice(updatedCart);
//     } catch (error) {
//       console.error("Error removing item:", error);
//       alert("Failed to remove item");
//     }
//   }; 

//   return (
//     <>
//       <div className="p-5">
//       <div className="flex justify-between items-center mb-5">
//           <h2 className="text-xl font-bold">Your Cart</h2>
//         </div>
//         <div className="flex flex-col p-5 justify-center gap-5">
//   <div className="cart-items">
//     <table className="table-auto w-full border-collapse border border-gray-300">
//       {/* Table Header */}
//       <thead className="bg-gray-500">
//         <tr>
//           <th className="border border-gray-300 px-4 py-2">Image</th>
//           <th className="border border-gray-300 px-4 py-2">Title</th>
//           <th className="border border-gray-300 px-4 py-2">Price</th>
//           <th className="border border-gray-300 px-4 py-2">Stock</th>
//           <th className="border border-gray-300 px-4 py-2">Quantity</th>
//           <th className="border border-gray-300 px-4 py-2">Edit</th>
//           <th className="border border-gray-300 px-4 py-2">Remove</th>
//         </tr>
//       </thead>

   
//       <tbody>
//         {products && products.length > 0 ? (
//           products.map((item, index) => (
//             <tr key={index} className="text-center">
//               <td className="border border-gray-300  px-4 py-2">
//                 <img
//                   src={`${backendUrl}/images/${item.image}`}
//                   alt={item.name}
//                   className='mx-auto'
//                   // className=" w-20 h-20 object-cover bg-red-500 mx-auto"
//                 />
//               </td>

//               <td className="border border-gray-300 px-4 py-2">{item.name}</td>

//               <td className="border border-gray-300 px-4 py-2">Rs {item.price}</td>

//               <td className="border border-gray-300 px-4 py-2">{item.stock}</td>

//               <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>

//               <td className="border border-gray-300 px-4 py-2">
//                 <div className="flex justify-center items-center">
//                   <button
//                     type="button"
//                     className="bg-green-500 text-white px-3 py-1 rounded-l-md"
//                     onClick={()=>decreaseQuantity(index)}
//                   >
//                     -
//                   </button>
//                   <span className="px-3 py-1 bg-green-500">{item.quantity}</span>
//                   <button
//                     type="button"
//                     className="bg-green-500 text-white px-3 py-1 rounded-r-md"
//                     onClick={()=>increaseQuantity(index)}
                  
//                   >
//                     +
//                   </button>
//                 </div>
//               </td>
//               {/* Remove Product */}
//               <td className="border border-gray-300 px-4 py-2">
//                 <button
//                   type="button"
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                   onClick={() => removeFromCart(item.stockCode)}
//                 >
//                   x
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="7" className="text-center py-4">
//               No products in the Cart
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
// </div>
// <div className="cart-bottom">
//                   <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details"><p>Subtotal</p><p>Rs {totalPrice}</p></div>
//             <hr />
//             <div className="cart-total-details"><p>Delivery Fee</p><p>{totalPrice===0?0:50}</p></div>
//             <hr />
//             <div className="cart-total-details"><b>Total</b><b>{totalPrice===0?0:totalPrice+50}</b></div>
//           </div>
//           <button onClick={()=>navigate("/PlaceOrder")}>PROCEED TO CHECKOUT</button>
//         </div> 
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, Enter it here</p>
//             <div className='cart-promocode-input bg-zinc-500 '>
//               <input type="text" placeholder='promo code'/>
//               <button className='bg-orange-500'>Submit</button>
//             </div>
//           </div>
//         </div>
//         </div>
//         </div>
//     </>
//   );
// };

// Cart.propTypes = {
//   updateCartCount: PropTypes.func.isRequired,
// };

// export default Cart;



import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ updateCartCount }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = savedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setProducts(updatedCart);
    calculateTotalPrice(updatedCart);
  }, []);

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const calculateTotalPrice = (cart) => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const decreaseQuantity = async (index) => {
    try {
      const updatedCart = [...products];
      const item = updatedCart[index];
      
      if (item.quantity > 1) {
        const response = await axios.post(`${backendUrl}/api/food/increaseStock`, {
          stockCode: item.stockCode,
          quantity: 1
        });
        
        updatedCart[index].quantity -= 1;
        updatedCart[index].stock = response.data.updatedStock;
      } else {
        await axios.post(`${backendUrl}/api/food/increaseStock`, {
          stockCode: item.stockCode,
          quantity: item.quantity
        });
        updatedCart.splice(index, 1);
      }
      
      setProducts(updatedCart);
      saveCartToLocalStorage(updatedCart);
      updateCartCount();
      calculateTotalPrice(updatedCart);
      toast.success('Quantity updated');
    } catch (error) {
      console.error('Error decreasing quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const increaseQuantity = async (index) => {
    try {
      const updatedCart = [...products];
      const item = updatedCart[index];
      
      if (item.quantity < item.stock) {
        const response = await axios.post(`${backendUrl}/api/food/decreaseStock`, {
          stockCode: item.stockCode,
          quantity: 1
        });
        
        updatedCart[index].quantity += 1;
        updatedCart[index].stock = response.data.updatedStock;
        
        setProducts(updatedCart);
        saveCartToLocalStorage(updatedCart);
        calculateTotalPrice(updatedCart);
        toast.success('Quantity updated');
      } else {
        toast.warning('Cannot add more than available stock');
      }
    } catch (error) {
      console.error("Error increasing quantity:", error);
      toast.error("Failed to update quantity");
    }
  };

  const removeFromCart = async (stockCode) => {
    try {
      const item = products.find(p => p.stockCode === stockCode);
      if (item) {
        await axios.post(`${backendUrl}/api/food/increaseStock`, {
          stockCode,
          quantity: item.quantity
        });
      }
      
      const updatedCart = products.filter(item => item.stockCode !== stockCode);
      setProducts(updatedCart);
      saveCartToLocalStorage(updatedCart);
      updateCartCount();
      calculateTotalPrice(updatedCart);
      toast.success('Item removed from cart');
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Failed to remove item");
    }
  };

  const applyPromoCode = () => {
    setIsApplyingPromo(true);
    setTimeout(() => {
      setIsApplyingPromo(false);
      toast.info('Promo code applied successfully!');
      // Here you would typically call your backend to validate the promo code
    }, 1500);
  };

  const deliveryFee = totalPrice === 0 ? 0 : 50;
  const grandTotal = totalPrice + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Your Shopping Cart</h2>
          <span className="text-gray-400">{products.length} items</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-gray-700/30">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-300 font-medium">Product</th>
                      <th className="px-6 py-4 text-center text-gray-300 font-medium">Price</th>
                      <th className="px-6 py-4 text-center text-gray-300 font-medium">Stock</th>
                      <th className="px-6 py-4 text-center text-gray-300 font-medium">Quantity</th>
                      <th className="px-6 py-4 text-right text-gray-300 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <AnimatePresence>
                      {products.length > 0 ? (
                        products.map((item, index) => (
                          <motion.tr
                            key={item.stockCode}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="hover:bg-gray-700/30"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                                  <img
                                    src={`${backendUrl}/images/${item.image}`}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-white">{item.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center text-gray-300">₹{item.price}</td>
                            <td className="px-6 py-4 text-center text-gray-300">{item.stock}</td>
                            <td className="px-6 py-4 text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button
                                  onClick={() => decreaseQuantity(index)}
                                  className="p-1 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="text-white px-2">{item.quantity}</span>
                                <button
                                  onClick={() => increaseQuantity(index)}
                                  className="p-1 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => removeFromCart(item.stockCode)}
                                className="p-1 rounded-full bg-red-600/80 hover:bg-red-700 text-white transition-colors"
                                aria-label="Remove item"
                              >
                                <X size={16} />
                              </button>
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <td colSpan="5" className="px-6 py-12 text-center">
                            <div className="text-gray-400">Your cart is empty</div>
                            <button
                              onClick={() => navigate('/Products')}
                              className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                            >
                              Continue Shopping
                            </button>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-gray-700/30">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">₹{totalPrice}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Delivery Fee</span>
                    <span className="text-white">₹{deliveryFee}</span>
                  </div>
                  
                  <div className="border-t border-gray-700/50 pt-4 flex justify-between">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-white font-bold">₹{grandTotal}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/PlaceOrder")}
                  disabled={products.length === 0}
                  className={`w-full mt-6 py-3 px-4 rounded-lg ${products.length > 0 ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gray-600 cursor-not-allowed'} text-white font-medium transition-all`}
                >
                  Proceed to Checkout
                </motion.button>
              </div>

              {/* Promo Code */}
              <div className="p-6 border-t border-gray-700/50">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Promo Code</h4>
                <div className="flex">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-grow px-4 py-2 bg-gray-700/50 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600/30"
                  />
                  <button
                    onClick={applyPromoCode}
                    disabled={isApplyingPromo || !promoCode}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white rounded-r-md transition-colors"
                  >
                    {isApplyingPromo ? (
                      <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Apply'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

Cart.propTypes = {
  updateCartCount: PropTypes.func.isRequired,
};

export default Cart;