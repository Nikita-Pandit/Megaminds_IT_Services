import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header';
import Cart from './pages/Cart';
import Products from "./pages/Products"
 import Home from './pages/Home';
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import ResetPassword from './pages/ResetPassword';
function App() {
  const [cartCount, setCartCount] = useState(0);

  // Sync cart count with localStoragme
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  };

  // On mount, initialize cart count
  useEffect(() => {
    updateCartCount();
  }, []);

  // Wrapper component to use `useLocation` inside `Router`
  const AppContent = () => {
    const location = useLocation();

    // Define paths where Header should not be displayed
    const hideHeaderRoutes = ['/Admin/AdminNav'];

    return (
      <>
        {!hideHeaderRoutes.includes(location.pathname) && <Header cartCount={cartCount} />}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Admin/AdminNav" element={<AdminNav />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products updateCartCount={updateCartCount} />} />
          <Route path="/Cart" element={<Cart updateCartCount={updateCartCount} />} />
       
          <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
          <Route path="/ResetPassword/:token" element={<ResetPassword/>}/>
       
         
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

 export default App;
