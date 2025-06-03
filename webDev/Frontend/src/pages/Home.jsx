// import React from 'react';
// import { ShoppingBag, Truck, Shield, Star, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   // Sample featured products - replace with your actual data
//   const featuredProducts = [
//     {
//       id: 1,
//       name: 'Premium Wireless Headphones',
//       price: 129.99,
//       image: '/images/headphones.jpg',
//       rating: 4.8
//     },
//     {
//       id: 2,
//       name: 'Ultra HD Smart TV',
//       price: 899.99,
//       image: '/images/tv.jpg',
//       rating: 4.6
//     },
//     {
//       id: 3,
//       name: 'Ergonomic Office Chair',
//       price: 249.99,
//       image: '/images/chair.jpg',
//       rating: 4.9
//     },
//     {
//       id: 4,
//       name: 'Smartphone Pro Max',
//       price: 1099.99,
//       image: '/images/phone.jpg',
//       rating: 4.7
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       {/* Hero Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Discover Amazing Products <br />
//               <span className="text-indigo-400">At Unbeatable Prices</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Shop the latest trends in electronics, fashion, home goods and more. 
//               Fast shipping and easy returns.
//             </p>
//             <Link 
//               to="/products" 
//               className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-medium rounded-lg transition-colors"
//             >
//               Shop Now <ArrowRight className="ml-2" size={20} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/30 hover:border-indigo-400/50 transition-all">
//               <div className="flex items-center mb-4">
//                 <div className="p-3 bg-indigo-600/20 rounded-full mr-4">
//                   <Truck className="text-indigo-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold">Fast Delivery</h3>
//               </div>
//               <p className="text-gray-400">
//                 Get your orders delivered to your doorstep in 2-3 business days with our premium shipping.
//               </p>
//             </div>
            
//             <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/30 hover:border-indigo-400/50 transition-all">
//               <div className="flex items-center mb-4">
//                 <div className="p-3 bg-indigo-600/20 rounded-full mr-4">
//                   <Shield className="text-indigo-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold">Secure Payments</h3>
//               </div>
//               <p className="text-gray-400">
//                 100% secure checkout with multiple payment options including cards, UPI, and wallets.
//               </p>
//             </div>
            
//             <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/30 hover:border-indigo-400/50 transition-all">
//               <div className="flex items-center mb-4">
//                 <div className="p-3 bg-indigo-600/20 rounded-full mr-4">
//                   <ShoppingBag className="text-indigo-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold">Easy Returns</h3>
//               </div>
//               <p className="text-gray-400">
//                 Not satisfied? Return within 30 days for a full refund. No questions asked.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-12">
//             <h2 className="text-3xl font-bold">Featured Products</h2>
//             <Link 
//               to="/products" 
//               className="text-indigo-400 hover:text-indigo-300 flex items-center transition-colors"
//             >
//               View all products <ArrowRight className="ml-2" size={18} />
//             </Link>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredProducts.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700/30 hover:border-indigo-400/50 transition-all group"
//               >
//                 <div className="h-48 bg-gray-700/30 flex items-center justify-center p-4">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="h-full w-full object-contain group-hover:scale-105 transition-transform"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
//                   <div className="flex items-center mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star 
//                         key={i} 
//                         size={16} 
//                         className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} 
//                       />
//                     ))}
//                     <span className="text-sm text-gray-400 ml-2">{product.rating}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xl font-bold text-indigo-400">₹{product.price}</span>
//                     <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm transition-colors">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shopping Experience?</h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Join thousands of satisfied customers who shop with us every day. Sign up now and get 10% off your first order!
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link 
//               to="/signup" 
//               className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-medium rounded-lg transition-colors"
//             >
//               Create Account
//             </Link>
//             <Link 
//               to="/products" 
//               className="px-8 py-3 bg-transparent hover:bg-gray-800/30 text-lg font-medium rounded-lg border border-gray-300 transition-colors"
//             >
//               Browse Products
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect, useState } from 'react';
import { ShoppingBag, Truck, Shield, Star, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
              useEffect(() => {
     console.log("SignUp component rendered");
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    if (id) {
      localStorage.setItem("customerID", id);
    }
  }, [location]);
  useEffect(() => {
    const fetchLatestProducts = async () => {
        try {
          const response = await axios.get(`${backendUrl}/api/food/getProductDetails`);
          const latest = response.data.allProductDetails.reverse().slice(0,4);
     setLatestProducts(latest);
        setLoading(false);
        } 
        catch (err) {
            console.error("Error fetching products:", err);
            setError("Failed to load products. Please try again later.");
            setLoading(false);
          }
    };

    fetchLatestProducts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Amazing Products <br />
              <span className="text-indigo-400">At Unbeatable Prices</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Shop the latest trends in electronics, fashion, home goods and more. 
              Fast shipping and easy returns.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-medium rounded-lg transition-colors"
            >
              Shop Now <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/30 hover:border-indigo-400/50 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-600/20 rounded-full mr-4">
                  <Truck className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
              </div>
              <p className="text-gray-400">
                Get your orders delivered to your doorstep in 2-3 business days with our premium shipping.
              </p>
            </div>
            
            <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/30 hover:border-indigo-400/50 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-600/20 rounded-full mr-4">
                  <Shield className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Secure Payments</h3>
              </div>
              <p className="text-gray-400">
                100% secure checkout with multiple payment options including cards, UPI, and wallets.
              </p>
            </div>
            
            <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/30 hover:border-indigo-400/50 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-600/20 rounded-full mr-4">
                  <ShoppingBag className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Easy Returns</h3>
              </div>
              <p className="text-gray-400">
                Not satisfied? Return within 30 days for a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Products</h2>
            <Link 
              to="/products" 
              className="text-indigo-400 hover:text-indigo-300 flex items-center transition-colors"
            >
              View all products <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-400">{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestProducts.length > 0 ? (
                latestProducts.map((product) => (
                  <div 
                    key={product._id} 
                    className="bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700/30 hover:border-indigo-400/50 transition-all group"
                  >
                    <div className="h-48 bg-gray-700/30 flex items-center justify-center p-4">
                      <img 
                        src={`${backendUrl}/images/${product.image}`} 
                        alt={product.description} 
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 truncate">{product.description}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(product.rating || 4) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} 
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">{product.rating || 4.0}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-indigo-400">₹{product.price}</span>
                        <span className={`text-sm ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                        {/* <Link
                          to={`/products/${product._id}`}
                          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm transition-colors"
                        >
                          View Details
                        </Link> */}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-400">
                  No products found
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who shop with us every day. Sign up now and get 10% off your first order!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-medium rounded-lg transition-colors"
            >
              Create Account
            </Link>
            <Link 
              to="/products" 
              className="px-8 py-3 bg-transparent hover:bg-gray-800/30 text-lg font-medium rounded-lg border border-gray-300 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
