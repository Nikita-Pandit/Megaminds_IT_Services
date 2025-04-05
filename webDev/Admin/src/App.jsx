import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from "./pages/AddProducts/Add"
import Navbar from "./components/Navbar/Navbar"
import List from "./pages/ListProducts/List"
import Edit from "./pages/EditProducts/Edit"
import Delete from './pages/DeleteProducts/Delete';
import PlacedOrder from "./pages/PlacedOrder"
import AdminSeePlacedOrders from './pages/AdminSeePlacedOrders';
function App() {

  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/Add" element={<Add/>}/>
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


