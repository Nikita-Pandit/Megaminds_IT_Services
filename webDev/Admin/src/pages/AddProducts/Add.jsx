// import React, {useState} from 'react';
// import axios from 'axios';
//  import { assets} from '../../assets/assets';
//  import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { useNavigate } from 'react-router-dom';
// import './Add.css'
// const Add = () => {
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [image, setImage] = useState(false);
//     const [product, setProduct] = useState({
//         stockCode: '',
//         stock: '',
//         name: '',
//         description: '',
//         quantity: 1,
//         price: '',
//         category: 'Vegetables',
//         //unit: ''
//     });
//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setProduct(data => ({ ...data, [name]: value }))
//     }


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!image) {
//             toast.error('Image not selected');
//             return null;
//         }

//         const formData = new FormData();
//         Object.keys(product).forEach((key) => {
//             formData.append(key, product[key]);
//         });
//         formData.append('image', image);
//         console.log(formData)
//         try {
            
//             const response = await axios.post(`${backendUrl}/api/food/addProduct`, formData);
//             // console.log(response.data.product)
//             //console.log(response.data.product.image)
//             if(response.data.success){
//                 toast.success('Product added successfully');
//                 setTimeout(()=>{
//                     setProduct({
//                         stockCode: '',
//                         stock: '',
//                         name: '',
//                         description: '',
//                         // quantity: 1,
//                         price: '',
//                       //  weight: '',
//                         category: product.category
//                         // unit: ''
//                     }),
//                     setImage(false)
//                 },6000)
//             }
           
//         } catch (error) {
//             toast.error(`Product not added: ${error.message}`);
//         }
//     };
//     return (
//         <>
//         <ToastContainer/>
//         <div className='flex items-center justify-center mt-10'>

//        <form action="" onSubmit={handleSubmit} className='flex flex-col  gap-5 '>
//        <div className='add-img-upload flex-col'>
//                     <p className='mb-2'>Upload image</p>
//                     <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
//                     <label htmlFor="image">
//                         <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
//                     </label>
//                 </div>
//      <div>
//      <p className='mb-2'>Product name</p>
//      <input type="text" className="input-field box-design bg-zinc-800 p-3" name="name" value={product.name} onChange={onChangeHandler} required placeholder="Type here"/>
//      </div>
//    <div className='flex flex-row gap-3'>
//    <input type="number"  name="stock" className='bg-zinc-800 box-design rounded-md category-price p-3' value={product.stock} onChange={onChangeHandler} required placeholder="Stock Available "/>
//    <input type="text"  name="stockCode" className='bg-zinc-800 rounded-md price-width box-design p-3' value={product.stockCode} onChange={onChangeHandler}required placeholder="stockCode"/>
   
//    </div>
//    <div>
//      <p className='mb-2'>Product description</p>
//    <textarea type="text" className="input-field box-design bg-zinc-800 p-3" rows={6} name="description" required value={product.description} onChange={onChangeHandler} placeholder="Write Content here"/>
//    </div>
//          <div className='flex flex-row gap-3'>
//                     <div>
//                         <p className='mb-2'>Product category</p>
//                         <select name='category'  value={product.category} onChange={onChangeHandler}
//  className='bg-zinc-800 box-design rounded-md category-price p-3'  >
                         
//                             <option value="Vegetables">Vegetables</option>
//                             <option value="Fruits">Fruits</option>
//                             <option value="Clothes">Clothes</option>
//                             <option value="Electronics">Electronics</option>
//                             <option value="Toys">Toys</option>
//                             <option value="Kitchen Utensils">Kitchen Utensils</option>
//                         </select>
//                     </div>
//                     <div className='flex-col'>
//                         <p className='mb-2'>Product Price</p>
//                         <input value={product.price} onChange={onChangeHandler} type="Number" name='price' className='bg-zinc-800 rounded-md price-width box-design p-3'  placeholder='25' />
//                     </div>
//                 </div>
//                <div className='flex items-center justify-center'>
//                <input
//               className="px-5 py-2 w-40 text-center bg-blue-500 rounded-lg"
//               type="submit"
//               value="Add Product"
//             />
//                </div>
//        </form>

//      </div>
//     </>
//     );
// };

// export default Add;


import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BoxSelect, ImagePlus, Tags, TextCursorInput, ListChecks, IndianRupee } from 'lucide-react';
import './Add.css';

const Add = () => {
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

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setProduct(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            toast.error('Please select an image');
            return null;
        }

        const formData = new FormData();
        Object.keys(product).forEach((key) => {
            formData.append(key, product[key]);
        });
        formData.append('image', image);

        try {
            console.log("product added")
            const response = await axios.post(`${backendUrl}/api/food/addProduct`, formData);
            if (response.data.success) {
                toast.success('Product added successfully');
                setTimeout(() => {
                    setProduct({
                        stockCode: '',
                        stock: '',
                        name: '',
                        description: '',
                        price: '',
                        category: product.category
                    });
                    setImage(false);
                }, 2000);
            }
        } catch (error) {
            toast.error(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <>
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
            
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800">
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
                                    <ImagePlus className="text-white" size={28} />
                                </div>
                                <h1 className="mt-4 text-3xl font-bold text-white outline-0 border-0">Add New Product</h1>
                                <p className="mt-2 text-gray-400">Fill in the product details below</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Image Upload */}
                                    <div className="col-span-1">
                                        <div className="add-img-upload flex flex-col items-center">
                                            <p className="mb-3 text-gray-300 font-medium">Product Image</p>
                                            <input 
                                                onChange={(e) => { 
                                                    setImage(e.target.files[0]); 
                                                    e.target.value = '' 
                                                }} 
                                                type="file" 
                                                accept="image/*" 
                                                id="image" 
                                                hidden 
                                            />
                                            <label 
                                                htmlFor="image" 
                                                className="cursor-pointer border-2 border-dashed border-gray-600 hover:border-indigo-400 rounded-xl w-full h-64 flex items-center justify-center transition-all duration-200"
                                            >
                                                {!image ? (
                                                    <div className="flex flex-col items-center text-gray-400">
                                                        <img src={assets.upload_area} alt="Upload area" className="w-24 h-24 mb-2 opacity-70" />
                                                        <p className="text-sm">Click to upload image</p>
                                                    </div>
                                                ) : (
                                                    <img 
                                                        src={URL.createObjectURL(image)} 
                                                        alt="Preview" 
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                    
                                    {/* Product Details */}
                                    <div className="col-span-1 space-y-6">
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <TextCursorInput className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                            </div>
                                            <input
                                                className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                                                type="text"
                                                name="name"
                                                value={product.name}
                                                onChange={onChangeHandler}
                                                required
                                                placeholder="Product Name"
                                            />
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <Tags className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                                </div>
                                                <input
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                                                    type="number"
                                                    name="stock"
                                                    value={product.stock}
                                                    onChange={onChangeHandler}
                                                    required
                                                    placeholder="Stock Available"
                                                />
                                            </div>
                                            
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <Tags className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                                </div>
                                                <input
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                                                    type="text"
                                                    name="stockCode"
                                                    value={product.stockCode}
                                                    onChange={onChangeHandler}
                                                    required
                                                    placeholder="Stock Code"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <ListChecks className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                            </div>
                                            <textarea
                                                className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400 min-h-[120px]"
                                                name="description"
                                                value={product.description}
                                                onChange={onChangeHandler}
                                                required
                                                placeholder="Product Description"
                                            />
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <BoxSelect className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
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
                                                    <IndianRupee className="text-gray-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                                </div>
                                                <input
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/40 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all border border-gray-600/30 hover:border-gray-500/50 group-focus-within:border-indigo-400 placeholder-gray-400"
                                                    type="number"
                                                    name="price"
                                                    value={product.price}
                                                    onChange={onChangeHandler}
                                                    required
                                                    placeholder="Price"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-center pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-1/2 py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium hover:opacity-90 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/20"
                                    >
                                        <ImagePlus size={18} />
                                        <span>Add Product</span>
                                    </button>
                                </div>
                            </form>
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
                `}</style>
            </div>
        </>
    );
};

export default Add;