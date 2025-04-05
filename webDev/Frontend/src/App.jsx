import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header';
import Cart from './pages/Cart';
import Products from "./pages/Products"
import Order from "./pages/Myorders/Order"
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
 import Home from './pages/Home';
import { AddProduct, EditProduct, DeleteProduct, ManageOrders, Reports } from "./pages/Admin/AdminDashboard"
import AdminLogin from './pages/Admin/Login/AdminLogin';
import AdminSignUp from './pages/Admin/SignUp/AdminSignUp';
// import AdminNav from './pages/Admin/AdminNav';
import Payment from "./pages/PaymentPage/Payment"
import ResetPassword from './pages/ResetPassword/ResetPassword';
function App() {
  const [cartCount, setCartCount] = useState(0);

  // Sync cart count with localStorage
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
          <Route path="/Order" element={<Order/>} />
          <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
          <Route path="/Payment/:orderID" element={<Payment/>} />
          <Route path="/ResetPassword/:token" element={<ResetPassword/>}/>
          <Route path="/Admin/AdminDashboard">
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="EditProduct" element={<EditProduct />} />
            <Route path="DeleteProduct" element={<DeleteProduct />} />
            <Route path="ManageOrders" element={<ManageOrders />} />
            <Route path="Reports" element={<Reports />} />
          </Route>
          <Route path="/Admin/Login/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin/Login/AdminSignUp" element={<AdminSignUp />} />
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
