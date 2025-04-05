// import React, { useState, useEffect } from "react";
// // import { Table, Select, Input } from "@/components/ui";
// import axios from "axios"


// const PlacedOrder = () => {
//   //const [search, setSearch] = useState("");
//   //const [statusFilter, setStatusFilter] = useState("");
//   const [orders, setOrders] = useState([]);
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;


// //   const handleStatusChange = (id, newStatus) => {
// //     setOrders((prevOrders) =>
// //       prevOrders.map((order) =>
// //         order.id === id ? { ...order, status: newStatus } : order
// //       )
// //     );
// //   };

// //   const filteredOrders = orders.filter(
// //     (order) =>
// //       order.customer.toLowerCase().includes(search.toLowerCase()) ||
// //       order.id.toString().includes(search)
// //   );


  
//   const fetchPlacedOrders=async ()=>{
//     console.log("muuuuuu")
// const response= await axios.get(`${backendUrl}/api/userPlacedOrdersInAdminDashboard`)
// console.log("response.data.fetchPlacedOrders",response.data.fetchPlacedOrders)
// if(response.data.success){
//     setOrders(response.data.fetchPlacedOrders)  
// }
//   }
//   useEffect(()=>{
//   fetchPlacedOrders()
//   },[])  


//   return (
// <div className="p-4">
//         <h1>Hello</h1>
//       <h2 className="text-xl font-semibold mb-4">Admin Order Dashboard</h2>
//       <div className="flex space-x-4 mb-4">
//         {/* <Input
//           placeholder="Search by Order ID or Customer"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-1/3"
//         /> */}
//         {/* <Select onChange={(e) => setStatusFilter(e.target.value)}>
//           <option value="">All Statuses</option>
//           <option value="Pending">Pending</option>
//           <option value="Processing">Processing</option>
//           <option value="Shipped">Shipped</option>
//           <option value="Delivered">Delivered</option>
//         </Select> */}
//       </div>
//       <table>
//         <thead>
//           <tr>
//             {/* <th>Order ID</th>
//             <th>Customer</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Action</th> */}
//             <th>userName</th>
//             <th>userEmail</th>
//             <th>userContact</th>
//             <th>orderDate</th>
//             <th>totalPrice</th>
        
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.orderID}>
//               <td>{order.orderDate}</td>
//               <td>{order.userID}</td>
//               <td>{order.totalPrice}</td>
//               {/* <td>{order.status}</td> */}
//               <td>
//                 {/* <Select
//                   value={order.status}
//                   onChange={(e) => handleStatusChange(order.id, e.target.value)}
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Delivered">Delivered</option>
//                 </Select> */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PlacedOrder;

// // // Sample order data
// // export const ordersData = [
// //   { id: 1, customer: "John Doe", date: "2025-03-30", status: "Pending" },
// //   { id: 2, customer: "Alice Smith", date: "2025-03-29", status: "Shipped" },
// //   { id: 3, customer: "Bob Johnson", date: "2025-03-28", status: "Delivered" },
// // ];


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PlacedOrder = () => {
    const navigate = useNavigate();


  const [orders, setOrders] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchPlacedOrders = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/userPlacedOrdersInAdminDashboard`);
      console.log("response.data.fetchPlacedOrders",response.data.fetchPlacedOrders)
      if (response.data.success) {
        setOrders(response.data.fetchPlacedOrders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


  useEffect(() => {
    fetchPlacedOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Order Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-zinc-700 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center">userID</th>
              <th className="py-3 px-6 text-center">userName</th>
              {/* <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Contact</th> */}
                <th className="py-3 px-6 text-center">orderID</th>
              <th className="py-3 px-6 text-center">Order Date</th>
              <th className="py-3 px-6 text-center">
              
                    products Placed
           
              </th>
              {/* <th className="py-3 px-6 text-left">Total Price</th> */}
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light bg-zinc-600">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.orderID} className="border-b border-gray-200 hover:bg-zinc-500">
                         <td className="py-3 px-6">{order.userID}</td>
                  <td className="py-3 px-6 text-center">{order.customerDetails?.FullName} {order.customerDetails?.LastName}</td>
                  {/* <td className="py-3 px-6">{order.customerDetails?.email}</td>
                  <td className="py-3 px-6">{order.customerDetails?.phone}</td> */}
                  <th className="py-3 px-6 text-center">{order.orderID}</th>
                  <td className="py-3 px-6 text-center">{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td className="py-3 px-6 text-center">
                    <button onClick={()=>{
navigate("/AdminSeePlacedOrders", { state: { order:order} })
                    }}>see products</button>
                  </td>
                  {/* <td className="py-3 px-6 font-semibold text-green-600">₹{order.totalPrice}</td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacedOrder;
