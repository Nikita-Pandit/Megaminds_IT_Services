// import React from 'react'
// import {  Link } from 'react-router-dom'

// const Navbar = () => {
   
//   return (
//     <>
//     <div className='mb-3'>
//            <div className='nav'>
//              <div>ABC</div>
//              <div>
//                <ul className='flex gap-4 items-end'>
//                  <li><Link to="/Add">Add Products</Link></li>
//                  <li><Link to="/List">Products List</Link></li>
//                  <li><Link to="/PlacedOrder">placedOrder</Link></li>
              
//                </ul>
//              </div>
//            </div>
//          </div>
        

 
     

//     </>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, List, PackageCheck } from 'lucide-react';

const Navbar = () => {
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
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/Add" 
              className="flex items-center px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors font-medium group"
            >
              <PlusCircle className="mr-2 text-indigo-400 group-hover:text-indigo-300" size={18} />
              Add Products
            </Link>
            <Link 
              to="/List" 
              className="flex items-center px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors font-medium group"
            >
              <List className="mr-2 text-indigo-400 group-hover:text-indigo-300" size={18} />
              Products List
            </Link>
            <Link 
              to="/PlacedOrder" 
              className="flex items-center px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors font-medium group"
            >
              <PackageCheck className="mr-2 text-indigo-400 group-hover:text-indigo-300" size={18} />
              Orders
            </Link>
          </nav>

          {/* Mobile Menu Button (would need implementation) */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;