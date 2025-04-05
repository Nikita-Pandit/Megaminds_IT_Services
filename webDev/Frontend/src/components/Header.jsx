// import React from 'react'
//  import { Link } from 'react-router-dom';
//  import PropTypes from 'prop-types'; 
// const Header = ({ cartCount }) => {
//   return (
//     <>
//       <div className='mb-3'>
//         <div className='nav'>
//             <div>ABC</div>
//             <div >
//             <ul className=' flex gap-4 items-end'>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/Products">Products</Link></li>
//                 <li><Link to="/Login">Login</Link></li>
//                <li><Link to="/Cart">Cart
//                <span className="ml-2 bg-red-500 px-2 py-1 rounded-full">
//                     {cartCount}
//                   </span>
               
//                </Link>
//                </li>

//                <li><Link to="/Admin/AdminNav">AdminNav</Link></li>
      
//             </ul>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }
// Header.propTypes = {
//   cartCount: PropTypes.number.isRequired,
// };
// export default Header




// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import axios from "axios"
// const Header = ({ cartCount }) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const navigate = useNavigate();
//   const customerID = localStorage.getItem('customerID') || sessionStorage.getItem('token');

//   const handleLogout = async() => {
//    try{
//     console.log("car");
//     const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
//     const customerID=localStorage.getItem("customerID")
//     const simplifiedCartData = cartData.map(item => ({
//       //stockCode:item.stockCode,
//       name: item.name,
//       price: item.price,
//      // description:item.description,
//       stock: item.stock,
//       image: item.image,
//       //category:item.category || "vegetables",
//       quantity: item.quantity || 1 // Default to 1 if quantity is missing
//     }));
//     console.log("cartData",simplifiedCartData)
//    const response= await axios.post(`${backendUrl}/api/fetchCartDetails`,{
//     cartData:simplifiedCartData,
//     customerID:customerID
//    })

//    console.log("Saved cart items:", response.data.cart.items);
//     localStorage.removeItem('customerID');
//     localStorage.removeItem('token');
//     sessionStorage.removeItem('token');
// localStorage.removeItem("cart")
//     navigate('/');    
//    }
//    catch (error) {
//     console.error("Error in handleLogout:", error);
//   }
//   };


    
  
//   return (
//     <>
//       <div className='mb-3'>
//         <div className='nav'>
//           <div>ABC</div>
//           <div>
//             <ul className='flex gap-4 items-end'>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/Products">Products</Link></li>
//               <li>
//                 <Link to="/Cart">Cart
//                   <span className="ml-2 bg-red-500 px-2 py-1 rounded-full">
//                     {cartCount}
//                   </span>
//                 </Link>
//               </li>
//               {customerID ? (
//                 <li>
//                   <button onClick={handleLogout}>Logout</button>
//                 </li> 
//               ) : (
//                 <li><Link to="/Login">Login</Link></li>
//               )}
             
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// Header.propTypes = {
//   cartCount: PropTypes.number.isRequired,
// };

// export default Header;





import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from "axios";
import { ShoppingCart, LogOut, LogIn } from 'lucide-react';

const Header = ({ cartCount }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const customerID = localStorage.getItem('customerID') || sessionStorage.getItem('token');

  const handleLogout = async() => {
    try {
      console.log("Saving cart before logout...");
      const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
      const customerID = localStorage.getItem("customerID");
      const simplifiedCartData = cartData.map(item => ({
        name: item.name,
        price: item.price,
        stock: item.stock,
        image: item.image,
        quantity: item.quantity || 1
      }));
      
      console.log("cartData", simplifiedCartData);
      const response = await axios.post(`${backendUrl}/api/fetchCartDetails`, {
        cartData: simplifiedCartData,
        customerID: customerID
      });

      console.log("Saved cart items:", response.data.cart.items);
      localStorage.removeItem('customerID');
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      localStorage.removeItem("cart");
      navigate('/');    
    } catch (error) {
      console.error("Error in handleLogout:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ShopSphere
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/Products" 
              className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              to="/Login" 
              className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
            >
           Login
            </Link>
            <Link 
              to="/Cart" 
              className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors font-medium"
            >
              <ShoppingCart className="mr-1" size={18} />
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {customerID ? (
              <button 
                onClick={handleLogout}
                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors font-medium"
              >
                <LogOut className="mr-1" size={18} />
                Logout
              </button>
            ) : (
              <Link 
                to="/Login" 
                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors font-medium"
              >
                <LogIn className="mr-1" size={18} />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;