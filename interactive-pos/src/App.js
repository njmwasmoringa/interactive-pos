import { TopNav } from "./TopNav";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./auth/Login";
import Order from "./order/Order";
import { useState } from "react";
import Orders from "./orders/orders";

function App() {

  const [orders, setOrders] = useState([]);
  const [customerNumber, setCustomerNumber] = useState(1);

  function newOrder(order){
    setOrders([...orders, order]);
    setCustomerNumber(customerNumber+1);
  }

  function checkoutOrder(order){
    setOrders(orders.map((o, i)=>{
      if(o.orderNumber == order.orderNumber){
        o.checkedOut = true;
      }
      return o;
    }));
  }

  return (
    <div>
      <TopNav />      
      <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/order" element={<Order 
              orderNumber={orders.length + 1} 
              customerNumber={customerNumber}
              onNewOrder={newOrder}
            />} />

            <Route path="/orders" element={<Orders orders={orders} onCheckout={checkoutOrder} />} />
        </Routes>
    </div>
  );
}

export default App;
