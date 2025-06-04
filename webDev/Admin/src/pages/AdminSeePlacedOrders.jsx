

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// const AdminSeePlacedOrders = () => {
//        const location = useLocation();
//  const order= location.state?.order; // "John Doe"
 
// const cartArray=order.cart;
// const customerDetails=order.customerDetails

//   const [totalPrice, setTotalPrice] = useState(0);
// const calculateTotalPrice = (cart) => {
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   setTotalPrice(total);
// };

//   useEffect(() => {
//     const updatedCart = cartArray.map(item => ({
//       ...item,
//        quantity: item.quantity || 1, // Default to 1 if displayQuantity is not set
//     }));
//     calculateTotalPrice(updatedCart);
//   }, []);


//   return (
//     <>
//       <div className="p-5">

//       <div className="flex justify-between items-center mb-5">
//           <h2 className="text-xl font-bold">Placed Orders of Customer</h2>
//         </div>



//         <div className="flex flex-col p-5   justify-center gap-5">
//         <table className="table-auto w-full border-collapse border border-gray-300">
 
//  <thead className="bg-gray-500">
//    <tr>
   
//      <th className="border border-gray-300 px-4 py-2">Title</th>
//      <th className="border border-gray-300 px-4 py-2">Price</th>
   
//      <th className="border border-gray-300 px-4 py-2">Stock Available</th>
//      <th className="border border-gray-300 px-4 py-2">Quantity</th>
   
//    </tr>
//  </thead>


//  <tbody>
//    {order  ? (
//      cartArray.map((item, index) => (
//        <tr key={index} className="text-center">
      

//          <td className="border border-gray-300 px-4 py-2">{item.name}</td>

//          <td className="border border-gray-300 px-4 py-2">Rs {item.price}</td>

//          <td className="border border-gray-300 px-4 py-2">Rs {item.stock}</td>

//          <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>


//        </tr>
//      ))
//    ) : (
//      <tr>
//        <td colSpan="7" className="text-center py-4">
//          No products in the Cart
//        </td>
//      </tr>
//    )}
//  </tbody>
// </table>
// </div>




//   <div className="cart-items ">

//    <div className="bg-zinc-800   wrap-cart-bottom p-5">
//    <div className="cart-bottom ">
//                   <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details"><p>Subtotal</p><p>Rs {totalPrice}</p></div>
//             <hr />
//             <div className="cart-total-details"><p>Delivery Fee</p><p>{totalPrice===0?0:50}</p></div>
//             <hr />
//             <div className="cart-total-details"><b>Total</b><b>{totalPrice===0?0:totalPrice+50}</b></div>
//           </div>
        
//         </div> 
     
//         </div>
//    </div>


     
//       <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-800 form gap-10">
       
//         <div>
//           <h3 className="text-lg font-bold mb-3">Customer Details</h3>   
//             <form className="flex flex-col gap-4">
//   {/* Name Fields */}
//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="FullName"
//       value={customerDetails.FullName}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//     <input
//       type="text"
//       name="LastName"
//       value={customerDetails.LastName}
     
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//   </div>
//   <div className="flex flex-row gap-5">
//     <input
//       type="email"
//       name="email"
//       value={customerDetails.email}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />

//   </div>
//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="street"
//       value={customerDetails.street}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//     <input
//       type="text"
//       name="city"
//       value={customerDetails.city}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//   </div>

//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="state"
//       value={customerDetails.state}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
   
//   </div>

//   <div className="flex flex-row gap-5">
//     <input
//       type="text"
//       name="country"
//       value={customerDetails.country}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//      <input
//       type="text"
//       name="zipCode"
//       value={customerDetails.zipCode}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//   </div>
//   <div className="flex flex-row gap-5">
//       <input
//       type="tel"
//       name="phone"
//             value={customerDetails.phone}
//       className="p-2 border bg-zinc-700 border-none outline-none rounded flex-1"
//     />
//   </div>
// </form>

//         </div>
//       </div>
   



//         </div>



//         </div>
//     </>
//   );
// };

// // Cart.propTypes = {
// //   updateCartCount: PropTypes.func.isRequired,
// // };

// export default AdminSeePlacedOrders;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdminSeePlacedOrders = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const order = location.state?.order;
  const cartArray = order?.cart || [];
  const customerDetails = order?.customerDetails || {};
  console.log("yyyy",customerDetails);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (cart) => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  useEffect(() => {
    if (cartArray.length > 0) {
      const updatedCart = cartArray.map(item => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      calculateTotalPrice(updatedCart);
    }
  }, [cartArray]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Order Details</h2>
          <div className="text-indigo-400 font-medium">
            Order ID: <span className="text-white">{order?.orderID || 'N/A'}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Items Table */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700/50 overflow-hidden">
              <div className="p-5 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Ordered Products</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Stock</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Qty</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {cartArray.length > 0 ? (
                      cartArray.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-700/20 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-white">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-gray-700 rounded-md flex items-center justify-center">
                                {item.image ? (
                                  <img className="h-full w-full object-cover" src={`${backendUrl}/images/${item.image}`}  alt={item.name} />
                                ) : (
                                  <span className="text-gray-400 text-xs">No Image</span>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-white">{item.name}</div>
                                {
                                  console.log('Item category:', item)

                                }
                                <div className="text-sm text-gray-400">{item.category || 'N/A'}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-white">
                            ₹{item.price.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-white">
                            {item.stock}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-white">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-white font-medium">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-400">
                          No products in this order
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Order Summary and Customer Details */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700/50 overflow-hidden">
              <div className="p-5 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Order Summary</h3>
              </div>
              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Delivery Fee</span>
                    <span>₹{totalPrice === 0 ? '0.00' : '50.00'}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-700/50">
                    <div className="flex justify-between text-white font-bold">
                      <span>Total</span>
                      <span>₹{totalPrice === 0 ? '0.00' : (totalPrice + 50).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700/50 overflow-hidden">
              <div className="p-5 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Customer Information</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                      <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                        {customerDetails.FullName || 'N/A'}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                      <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                        {customerDetails.LastName || 'N/A'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                      {customerDetails.email || 'N/A'}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                    <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                      {customerDetails.phone || 'N/A'}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                    <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                      {customerDetails.street || 'N/A'}, {customerDetails.city || 'N/A'}, {customerDetails.state || 'N/A'}, {customerDetails.zipCode || 'N/A'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Country</label>
                      <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                        {customerDetails.country || 'N/A'}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Zip Code</label>
                      <div className="p-3 bg-gray-700/50 rounded-lg text-white">
                        {customerDetails.zipCode || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSeePlacedOrders;