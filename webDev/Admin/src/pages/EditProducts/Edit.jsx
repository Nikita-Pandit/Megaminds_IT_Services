// import { useLocation, useNavigate} from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from "axios"
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { assets} from '../../assets/assets';

// const Edit = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//        const [image, setImage] = useState(false);
//   const [product, setProduct] = useState({
//     stockCode: '',
//     stock: '',
//     name: '',
//     description: '',
//     quantity: 1,
//     price: '',
//     category: 'Vegetables',

//   });
// const location=useLocation()
// const editProduct=location?.state?.item
// useEffect(() => {
//   if ( editProduct) {
//     setProduct( editProduct);
//   }
// }, []);
//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Product updated:', product);
//     // if (!image) {
//     //     toast.error('Image not selected');
//     //     return null;
//     // }

//     const formData = new FormData();
//     Object.keys(product).forEach((key) => {
//         formData.append(key, product[key]);
//     });
//     formData.append('image', image);
//     console.log(formData)
//     try {
//    console.log("Inside Edit product")     
//         const response = await axios.post(`${backendUrl}/api/food/editProduct`, formData);
//         console.log(response.data.updatedProduct)
//         if(response.data.updatedProduct){
//             toast.success('product updated successfully', {
//                 style: { color: "#111" } 
//               });
//             setProduct(response.data.updatedProduct)
    
//         }
       
//     } catch (error) {
//         toast.error(`Product not added: ${error.message}`);
//     }
// };

//   return (
//     <>
//     <ToastContainer/>
//           <div className='flex items-center justify-center mt-10'>
  
//          <form action="" onSubmit={handleSubmit} className='flex flex-col  gap-5 '>
//          <div className='add-img-upload flex-col'>
//                       <p className='mb-2'>Upload image</p>
//                       <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
//                       <label htmlFor="image">
//                           <img src={!image ? (product.image ? `${backendUrl}/images/${product.image}` : assets.upload_area) : URL.createObjectURL(image)} alt="" />
//                       </label>
//                   </div>
//        <div>
//        <p className='mb-2'>Product name</p>
//        <input type="text" className="input-field box-design bg-zinc-500 p-3" name="name" value={product.name} onChange={onChangeHandler} required placeholder="Type here"/>
//        </div>
//      <div className='flex flex-row gap-3'>
//      <input type="number"  name="stock" className='bg-zinc-500 box-design rounded-md category-price p-3' value={product.stock} onChange={onChangeHandler}  required placeholder="Stock Available "/>
//      <input type="text"  name="stockCode" className='bg-zinc-500 rounded-md price-width box-design p-3' value={product.stockCode} onChange={onChangeHandler} required placeholder="stockCode"/>
     
//      </div>
//      <div>
//        <p className='mb-2'>Product description</p>
//      <textarea type="text" className="input-field box-design bg-zinc-500 p-3" rows={6} name="description" required value={product.description} onChange={onChangeHandler} placeholder="Write Content here"/>
//      </div>
//            <div className='flex flex-row gap-3'>
//                       <div>
//                           <p className='mb-2'>Product category</p>
//                           <select name='category'  value={product.category} 
//    className='bg-zinc-500 box-design rounded-md category-price p-3'  >
                           
//                               <option value="Vegetables">Vegetables</option>
//                               <option value="Fruits">Fruits</option>
//                               <option value="Clothes">Clothes</option>
//                               <option value="Electronics">Electronics</option>
//                               <option value="Toys">Toys</option>
//                               <option value="Kitchen Utensils">Kitchen Utensils</option>
//                           </select>
//                       </div>
//                       <div className='flex-col'>
//                           <p className='mb-2'>Product Price</p>
//                           <input value={product.price} onChange={onChangeHandler} type="Number" name='price' className='bg-zinc-500 rounded-md price-width box-design p-3'  placeholder='25' />
//                       </div>
//                   </div>
//                  <div className='flex items-center justify-center'>
//                  <input
//                 className="px-5 py-2 w-40 text-center bg-blue-500 rounded-lg hover:bg-green-700 transition duration-300"
//                 type="submit"
//                 value="Edit Product"
//               />
//                  </div>
//          </form>
  
//        </div>
//        </>
//   );
// };
// export default Edit;


import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../../assets/assets';
import { Upload, Box, Package, DollarSign, List, Hash } from 'lucide-react';

const Edit = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [image, setImage] = useState(false);
  const [product, setProduct] = useState({
    stockCode: '',
    stock: '',
    name: '',
    description: '',
    quantity: 1,
    price: '',
    category: 'Vegetables',
  });

  const location = useLocation();
  const editProduct = location?.state?.item;

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    }
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });
    formData.append('image', image);

    try {
      const response = await axios.post(`${backendUrl}/api/food/editProduct`, formData);
      if (response.data.updatedProduct) {
        toast.success('Product updated successfully', {
          style: { color: '#111' },
        });
        setProduct(response.data.updatedProduct);
      }
    } catch (error) {
      toast.error(`Product not updated: ${error.message}`);
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

      <div className="relative w-full max-w-2xl">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Main card */}
        <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>
          
          <div className="px-8 py-10">
            <div className="flex flex-col items-center mb-8">
              <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                <Package className="text-white" size={28} />
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white">Edit Product</h1>
              <p className="mt-2 text-gray-400">Update your product details</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div className="flex flex-col items-center">
                <div className="relative group mb-4">
                  <input
                    onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }}
                    type="file"
                    accept="image/*"
                    id="image"
                    className="hidden"
                  />
                  <label
                    htmlFor="image"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <div className="w-40 h-40 rounded-lg border-2 border-dashed border-gray-600 hover:border-indigo-400 transition-all overflow-hidden flex items-center justify-center">
                      {!image ? (
                        product.image ? (
                          <img
                            src={`${backendUrl}/images/${product.image}`}
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center p-4 text-gray-400">
                            <Upload size={32} className="mb-2" />
                            <span>Upload Image</span>
                          </div>
                        )
                      ) : (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Product Name */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Box className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                  name="name"
                  value={product.name}
                  onChange={onChangeHandler}
                  required
                  placeholder="Product Name"
                />
              </div>

              {/* Stock and Stock Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Hash className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    type="number"
                    name="stock"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    value={product.stock}
                    onChange={onChangeHandler}
                    required
                    placeholder="Stock Available"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Hash className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    type="text"
                    name="stockCode"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    value={product.stockCode}
                    onChange={onChangeHandler}
                    required
                    placeholder="Stock Code"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="relative group">
                <div className="absolute top-3 left-3">
                  <List className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                </div>
                <textarea
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                  rows={5}
                  name="description"
                  required
                  value={product.description}
                  onChange={onChangeHandler}
                  placeholder="Product Description"
                />
              </div>

              {/* Category and Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Box className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <select
                    name="category"
                    value={product.category}
                    onChange={onChangeHandler}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 appearance-none"
                  >
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Toys">Toys</option>
                    <option value="Kitchen Utensils">Kitchen Utensils</option>
                  </select>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <DollarSign className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <input
                    type="number"
                    name="price"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                    value={product.price}
                    onChange={onChangeHandler}
                    placeholder="Price"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium hover:opacity-90 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/20"
              >
                <Package size={18} />
                <span>Update Product</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Blob animation styles */}
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
      `}</style>
    </div>
  );
};

export default Edit;