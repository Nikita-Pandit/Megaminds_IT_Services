// import React, {useEffect,useState}from 'react'
// import axios from "axios"
// import {  Link ,useNavigate} from 'react-router-dom'

// const List = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//          const [data,setData]=useState([])
//          const navigate=useNavigate()
       
//     const getAllProductDetails=async()=>{
//         try{
//       const response=await axios.get(`${backendUrl}/api/food/getProductDetails`)
//       console.log(response.data.allProductDetails)
//       const reversedProducts=response.data.allProductDetails.reverse()
//       setData(reversedProducts)
//         }
//         catch(error)
//         {
//       console.error("Error in fetching productDetails")
//         }
//         }
//           useEffect(()=>{
//             getAllProductDetails()
//           }
//         ,[])
//   return (
//          <div className='p-5'>
//   <div className='p-5 justify-center  flex flex-row flex-wrap gap-5'>
// {
//   data && data.length>0 ? (data.map((item,index)=>{
//     return (
      
//       <div key={index} className='bg-zinc-700 card p-3'>
    
//    <div className='image-profile-container bg-zinc-600  border-none rounded-md'>
// <img className='rounded-md w-full  h-full object-contain' src={`${backendUrl}/images/`+item.image} alt="" /> 
// {/* <img className='rounded-md w-full  h-full object-contain' src={`http://localhost:20000${item.image}`} alt="" />  */}
// </div>
// <div className='heading'>
// <h1 className="student-name">{item.description}</h1>
// </div>
//     <p>Rs {item.price} </p>
//   <div className="flex items-center justify-center gap-10">
//   <button
//                     type="button"
//                     className="more-info text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                     onClick={() => navigate("/Edit", { state: { item } })}
//                   >
//                     Edit
//                   </button>
//                   <button     
//                     type="button" 
//                     className="more-info text-white bg-red-500  hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                     onClick={() => navigate("/Delete", { state: { item } })}
//                     >
                      
//                     Delete
//                   </button>
//                 </div>


//    </div>
//     )
//   })) : ( <p>No data available</p>)
// }
//   </div>
//      </div>
//   )
// }

// export default List



// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom';
// import { Search, Edit2, Trash2 } from 'lucide-react';

// const List = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const getAllProductDetails = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/food/getProductDetails`);
//       const reversedProducts = response.data.allProductDetails.reverse();
//       setData(reversedProducts);
//       setFilteredData(reversedProducts);
//     } catch (error) {
//       console.error("Error in fetching productDetails");
//     }
//   };

//   useEffect(() => {
//     getAllProductDetails();
//   }, []);

//   useEffect(() => {
//     const filtered = data.filter(item => 
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm, data]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-5">
//       <div className="max-w-7xl mx-auto">
//         {/* Search Box */}
//         <div className="mb-8 flex justify-center">
//           <div className="relative w-full max-w-md">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <Search className="text-gray-400" size={20} />
//             </div>
//             <input
//               type="text"
//               className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none border border-gray-600/30 hover:border-gray-500/50 placeholder-gray-400 transition-all"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Product Grid */}
//         {filteredData.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredData.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-indigo-500/20"
//               >
//                 {/* Product Image */}
//                 <div className="h-48 bg-gray-700/40 flex items-center justify-center p-4">
//                   <img 
//                     className="w-full h-full object-contain" 
//                     src={`${backendUrl}/images/${item.image}`} 
//                     alt={item.description} 
//                   />
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-white mb-2 truncate">
//                     {item.description}
//                   </h3>
//             <p className="text-indigo-400 font-medium text-xl mb-4">
//                     ₹{item.price}
//                   </p> 
                 




//                   {/* Action Buttons */}
//                   <div className="flex justify-between gap-3">
//                     <button
//                       onClick={() => navigate("/Edit", { state: { item } })}
//                       className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-all"
//                     >
//                       <Edit2 size={16} />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => navigate("/Delete", { state: { item } })}
//                       className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all"
//                     >
//                       <Trash2 size={16} />
//                       Delete
//                     </button>
//                   </div>




//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <div className="text-gray-400 text-lg">
//               {searchTerm ? 
//                 `No products found matching "${searchTerm}"` : 
//                 'No products available'
//               }
//             </div>
//             {searchTerm && (
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
//               >
//                 Clear search
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;



// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom';
// import { Search, Edit2, Trash2 } from 'lucide-react';

// const List = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const getAllProductDetails = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/food/getProductDetails`);
//       const reversedProducts = response.data.allProductDetails.reverse();
//       setData(reversedProducts);
//       setFilteredData(reversedProducts);
//     } catch (error) {
//       console.error("Error in fetching productDetails");
//     }
//   };

//   useEffect(() => {
//     getAllProductDetails();
//   }, []);

//   useEffect(() => {
//     const filtered = data.filter(item => 
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm, data]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-5">
//       <div className="max-w-7xl mx-auto">
//         {/* Search Box */}
//         <div className="mb-8 flex justify-center">
//           <div className="relative w-full max-w-md">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <Search className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={20} />
//             </div>
//             <input
//               type="text"
//               className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none border border-gray-600/30 hover:border-gray-500/50 placeholder-gray-400 transition-all group"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Product Grid */}
//         {filteredData.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredData.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-indigo-500/20"
//               >
//                 {/* Product Image */}
//                 <div className="h-48 bg-gray-700/40 flex items-center justify-center p-4">
//                   <img 
//                     className="w-full h-full object-contain" 
//                     src={`${backendUrl}/images/${item.image}`} 
//                     alt={item.description} 
//                   />
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-white mb-1 truncate">
//                     {item.description}
//                   </h3>
                  
//                   <div className="flex items-center justify-between mb-3">
//                     <p className="text-indigo-400 font-medium text-xl">
//                       ₹{item.price}
//                     </p>
//                     <span className={`text-sm px-2 py-1 rounded-full ${
//                       item.stock > 0 ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
//                     }`}>
//                       {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
//                     </span>
//                   </div>

//                   <p className="text-gray-400 text-sm mb-4 line-clamp-2">
//                     {item.description}
//                   </p>

//                   {/* Action Buttons */}
//                   <div className="flex justify-between gap-3">
//                     <button
//                       onClick={() => navigate("/Edit", { state: { item } })}
//                       className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600/80 text-gray-300 py-2 px-4 rounded-lg border border-gray-600/50 hover:border-gray-500/60 transition-all"
//                     >
//                       <Edit2 size={16} className="text-indigo-400" />
//                       <span>Edit</span>
//                     </button>
//                     <button
//                       onClick={() => navigate("/Delete", { state: { item } })}
//                       className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-red-600/20 text-gray-300 py-2 px-4 rounded-lg border border-gray-600/50 hover:border-red-400/50 transition-all"
//                     >
//                       <Trash2 size={16} className="text-red-400" />
//                       <span>Delete</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <div className="text-gray-400 text-lg">
//               {searchTerm ? 
//                 `No products found matching "${searchTerm}"` : 
//                 'No products available'
//               }
//             </div>
//             {searchTerm && (
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="mt-4 px-4 py-2 text-indigo-400 hover:text-indigo-300 hover:bg-gray-700/50 rounded-lg transition-colors"
//               >
//                 Clear search
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;











import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Search, Edit2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const List = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const getAllProductDetails = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/food/getProductDetails`);
      const reversedProducts = response.data.allProductDetails.reverse();
      setData(reversedProducts);
      setFilteredData(reversedProducts);
    } catch (error) {
      console.error("Error in fetching productDetails");
    }
  };

  useEffect(() => {
    getAllProductDetails();
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setTimeout(() => {
      navigate("/Edit", { state: { item } });
    }, 300); // Match this with animation duration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-5">
      <div className="max-w-7xl mx-auto">
        {/* Search Box */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={20} />
            </div>
            <input
              type="text"
              // className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none border border-gray-600/30 hover:border-gray-500/50 placeholder-gray-400 transition-all group"
                 className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/50 hover:border-gray-500 placeholder-gray-400"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleProductClick(item)}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/30 hover:border-indigo-400/50 cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gray-700/40 flex items-center justify-center p-4">
                    <img 
                      className="w-full h-full object-contain" 
                      src={`${backendUrl}/images/${item.image}`} 
                      alt={item.description} 
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1 truncate">
                      {item.description}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-indigo-400 font-medium text-xl">
                        ₹{item.price}
                      </p>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        item.stock > 0 ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                      }`}>
                        {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

  
<div className="flex justify-between gap-3">
        {/* Edit Button - Emerald Gradient */}
        <motion.button
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(to right, #10b981, #34d399)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            navigate("/Edit", { state: { item } });
          }}
          className="flex-1 flex items-center justify-center gap-2 
          bg-gradient-to-r from-emerald-600 to-emerald-500 
          hover:from-emerald-500 hover:to-emerald-400 
          text-white py-2 px-4 rounded-lg transition-all 
          shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30
          border border-emerald-400/30"
        >
          <Edit2 size={16} className="text-white" />
          <span>Edit</span>
        </motion.button>

        {/* Delete Button - Rose Gradient */}
        <motion.button
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(to right, #f43f5e, #fb7185)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            navigate("/Delete", { state: { item } });
          }}
          className="flex-1 flex items-center justify-center gap-2 
          bg-gradient-to-r from-rose-600 to-rose-500 
          hover:from-rose-500 hover:to-rose-400 
          text-white py-2 px-4 rounded-lg transition-all 
          shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30
          border border-rose-400/30"
        >
          <Trash2 size={16} className="text-white" />
          <span>Delete</span>
        </motion.button>
      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-lg">
              {searchTerm ? 
                `No products found matching "${searchTerm}"` : 
                'No products available'
              }
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 text-indigo-400 hover:text-indigo-300 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>

      {/* Pop Animation Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-800 p-6 rounded-xl max-w-md w-full mx-4"
            >
              <div className="h-64 bg-gray-700/40 flex items-center justify-center mb-4 rounded-lg">
                <img 
                  className="h-full object-contain" 
                  src={`${backendUrl}/images/${selectedProduct.image}`} 
                  alt={selectedProduct.description} 
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedProduct.description}
              </h3>
              <div className="flex justify-between items-center mb-4">
                <p className="text-indigo-400 font-bold text-2xl">
                  ₹{selectedProduct.price}
                </p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedProduct.stock > 0 ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                }`}>
                  {selectedProduct.stock > 0 ? `${selectedProduct.stock} in stock` : 'Out of stock'}
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                {selectedProduct.description}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default List;