import { TopNav } from "./TopNav";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Login from "./auth/Login";
import Order from "./order/Order";
import { useState } from "react";
import Orders from "./orders/orders";

function App() {

  const [base, setBase] = useState('/interactive-pos');
  
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [customerNumber, setCustomerNumber] = useState(1);
  const navigate = useNavigate();

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

  function signout(){
    setUser(null);
    navigate("");
  }

  return (
    <div>
      <TopNav user={user} onSignOut={signout} base={base} />      
      <Routes>
          <Route path={base+'/'} element={<Login onSignIn={(usr)=>setUser(usr)} />} />
          <Route 
            path={base+"/order"} element={<Order 
              user={user}
              orderNumber={orders.length + 1} 
              customerNumber={customerNumber}
              onNewOrder={newOrder}
              base={base}
            />} />
            <Route user={user} path={base+"/orders"} element={<Orders orders={orders} onCheckout={checkoutOrder} />} />
          <Route path="**" element={<div>404 Page not found</div>} />
        </Routes>
    </div>
  );
}

export default App;
