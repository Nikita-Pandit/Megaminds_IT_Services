import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from "./pages/AddProducts/Add"
import Navbar from "./components/Navbar/Navbar"
import List from "./pages/ListProducts/List"
import Edit from "./pages/EditProducts/Edit"
import Delete from './pages/DeleteProducts/Delete';
import PlacedOrder from "./pages/PlacedOrder"
import AdminSeePlacedOrders from './pages/AdminSeePlacedOrders';
import AdminSignUp from "./pages/AdminSignUp"
import AdminLogin from './pages/AdminLogin';
import Home from "./pages/Home"
import ResetPassword from "./pages/ResetPassword"
function App() {

  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
  <Route path="/" element={<Home/>}/>
      <Route path="/signUp" element={<AdminSignUp/>}/>
       <Route path="/login" element={<AdminLogin/>}/>
      <Route path="/Add" element={<Add/>}/>
    <Route path="/reset-password/:token" element={<ResetPassword/>}/>
      <Route path="/List" element={<List/>}/>
      <Route path="/Edit" element={<Edit/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/PlacedOrder" element={<PlacedOrder/>}/>
      <Route path="/AdminSeePlacedOrders" element={<AdminSeePlacedOrders/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App


