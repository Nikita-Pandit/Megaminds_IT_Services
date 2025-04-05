

// import React, {useEffect,useState}from 'react'
// import axios from "axios"
// import PropTypes from 'prop-types'; 
// import { useNavigate } from 'react-router-dom'
// const Products = ({updateCartCount}) => {
  
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const navigate=useNavigate()
//   const [data,setData]=useState([])
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const getAllProductDetails=async()=>{
//   try{
// const response=await axios.get(`${backendUrl}/api/food/getProductDetails`)
// console.log(response.data.allProductDetails)
// const reversedProducts=response.data.allProductDetails.reverse()
// setData(reversedProducts)
// setFilteredData(reversedProducts)
//   }
//   catch(error)
//   {
// console.error("Error in fetching productDetails")
//   }
//   }


//   const addToCart = async(item) => {
//     if (item.stock <= 0) {
//       alert('This item is out of stock');
//       return;
//     }

//     // Call API to decrease stock
//     const response = await axios.post(`${backendUrl}/api/food/decreaseStock`, {
//       stockCode: item.stockCode,
//       quantity: 1 // decrease by 1
//     });

//     // Update local state with the new stock value
//     const updatedData = data.map(product => 
//       product.stockCode === item.stockCode 
//         ? {...product, stock: response.data.updatedStock}
//         : product
//     );
    
//     setData(updatedData);
//     setFilteredData(updatedData);
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//    // const isItemAlreadyInCart = cart.some((cartItem) => cartItem.stockCode === item.stockCode);

//    const existingItemIndex = cart.findIndex(cartItem => cartItem.stockCode === item.stockCode);

//     // if (!isItemAlreadyInCart) {
//     //   //cart.unshift(item)
//     //   cart.unshift({...item, quantity: 1}); // Add quantity field
//     //   localStorage.setItem('cart', JSON.stringify(cart));
//     //   updateCartCount(); // Update the count in the header
//     // } 

    
//     if (existingItemIndex >= 0) {
//       // Item exists, update quantity
//       cart[existingItemIndex].quantity += 1;
//     } else {
//       // Add new item
//       cart.unshift({...item, quantity: 1});
//     }
//        navigate('/Cart');
//        localStorage.setItem('cart', JSON.stringify(cart));
//        updateCartCount();
//        navigate('/Cart');
//   };
//   const handleSearch=(e)=>{
//     console.log(searchQuery)
// const query=e.target.value.toLowerCase()
// setSearchQuery(query)
// if(query){
//   const filtered=data.filter((item)=>item.description.toLowerCase().includes(query))
//   setFilteredData(filtered);
// }
// else{
//   setFilteredData(data)
// }
//   }

  
//   useEffect(()=>{
//     getAllProductDetails()
//   }
// ,[])
//   return (
//     <>
//          <div className='flex items-center justify-center mt-20' >
//      <input className="bg-zinc-700 product-search-box p-3 border-2 rounded-md outline-none border-none text-center" type="text" required placeholder='Search Products...' value={searchQuery} onChange={handleSearch} /> 
//      </div>

//      <div className='p-5'>
//   <div className='p-5 justify-center  flex flex-row flex-wrap gap-5'>
// {
//   filteredData && filteredData.length>0 ? (filteredData.map((item,index)=>{
//     return (
//       <div key={index} className='bg-zinc-700 card p-3'>
    
//    <div className='image-profile-container  bg-zinc-600  border-none rounded-md'>
// <img className='rounded-md w-full  h-full object-contain' src={`${backendUrl}/images/`+item.image} alt="" /> 
// </div>
// <div className='food-name text-center'>
// <p>{item.name}</p>
// </div>
// <div className="description-name mt-1">
//   <p>{item.description}</p>
// </div>

//     <p  className='mt-1'>Rs {item.price}</p>
//     <p className="mt-1" >Stock Available : {item.stock}</p>
  
//   <div className="flex items-center justify-center">
//                   <button
//                     type="button"
//                     className="more-info text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    
//                     onClick={() => addToCart(item)}
                  
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//    </div>
//     )

//   })) : ( <p>No data available</p>)
// }
//   </div>
//      </div>
//     </>
//   )
// }
// Products.propTypes = {
//   updateCartCount: PropTypes.func.isRequired, 
// };

// export default Products









import React, { useEffect, useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ updateCartCount }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backendUrl}/api/food/getProductDetails`);
      const reversedProducts = response.data.allProductDetails.reverse();
      setData(reversedProducts);
      setFilteredData(reversedProducts);
    } catch (error) {
      console.error("Error in fetching productDetails");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (item) => {
    if (item.stock <= 0) {
      toast.error('This item is out of stock', {
        style: { color: '#fff', background: '#ef4444' },
      });
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/api/food/decreaseStock`, {
        stockCode: item.stockCode,
        quantity: 1
      });

      const updatedData = data.map(product => 
        product.stockCode === item.stockCode 
          ? {...product, stock: response.data.updatedStock}
          : product
      );
      
      setData(updatedData);
      setFilteredData(updatedData);

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItemIndex = cart.findIndex(cartItem => cartItem.stockCode === item.stockCode);

      if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.unshift({...item, quantity: 1});
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      
      toast.success(`${item.name} added to cart!`, {
        style: { color: '#fff', background: '#10b981' },
      });
      
      navigate('/Cart');
    } catch (error) {
      toast.error('Failed to add item to cart', {
        style: { color: '#fff', background: '#ef4444' },
      });
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = data.filter((item) => 
        item.description.toLowerCase().includes(query) || 
        item.name.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  // useEffect(() => {
  //   const customerID = localStorage.getItem("customerID");
  
  //   if (!customerID) {
  //     toast.warn("Please log in to continue.", { autoClose: 3000 });
  //     navigate("/Login") // Prevents unnecessary API call if user is not logged in
  //   }
  
  //   getAllProductDetails();
  // }, []);

  useEffect(() => {
    const customerID = localStorage.getItem("customerID");
  
    if (!customerID) {
      toast.warn("Please log in to continue.", { autoClose: 3000 });
  
      // Delay navigation to allow toast to be visible
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Waits for 3 seconds before redirecting
    } else {
      getAllProductDetails();
    }
  }, [navigate]);
  

  return (
  <>
  <ToastContainer/>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="text-gray-400" size={20} />
        </div>
        <input
          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/50 hover:border-gray-500 placeholder-gray-400"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredData.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-indigo-500/20 transform hover:-translate-y-2 hover:scale-105 will-change-transform"
            >
              <div className="h-48 bg-gray-700/50 flex items-center justify-center p-4">
                <img 
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" 
                  src={`${backendUrl}/images/${item.image}`} 
                  alt={item.name} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
                  }}
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">{item.name}</h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2">{item.description}</p>
                
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-400">₹{item.price}</span>
                  <span className={`text-sm ${item.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  disabled={item.stock <= 0}
                  className={`w-full mt-4 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 ${
                    item.stock > 0 
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/30'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={18} />
                  <span>{item.stock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-xl">No products found matching your search</p>
          {searchQuery && (
            <button 
              onClick={() => {
                setSearchQuery('');
                setFilteredData(data);
              }}
              className="mt-4 text-indigo-400 hover:text-indigo-300 underline"
            >
              Clear search
            </button>
          )}
        </div>
      )}

      {/* Add these styles for the animations */}
      <style jsx global>{`
        .transform {
          transition-property: transform, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        .will-change-transform {
          will-change: transform;
        }
        .hover\:-translate-y-2:hover {
          transform: translateY(-0.5rem);
        }
        .hover\:scale-105:hover {
          transform: scale(1.05);
        }
        .hover\:shadow-lg:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .hover\:shadow-indigo-500\/20:hover {
          box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2), 0 4px 6px -2px rgba(79, 70, 229, 0.1);
        }
      `}</style>
    </div>
  </>
  );
};

Products.propTypes = {
  updateCartCount: PropTypes.func.isRequired,
};

export default Products;