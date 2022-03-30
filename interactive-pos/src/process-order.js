import { useState } from "react";

function Processorder({order:{products}, onProcess=()=>{}, orderNumber, customerNumber}){
    const total = products.reduce((a, b)=>a+(b.price*b.qty), 0);
    const [amount, setAmount] = useState(total);
    const [order, setOrder] = useState({
        products, 
        orderNumber, 
        customer:`Customer #${customerNumber}`,
        total
    });

    function processOrder(event){
        event.preventDefault();
        onProcess(order);
    }

    return (
        <form className="pos-padding-10" onSubmit={processOrder}>
            <h3>Order No# {orderNumber}</h3>
            Total Amount:
            <h1 className="pos-margin-0">{total.toFixed(2)}</h1>
            <div className="form-group">
                <label>Customer Name / Phone Number</label>
                <input type="text" value={order.customer} onChange={(event)=>{setOrder({products, customer:event.target.value})}} />
            </div>
            <div className="form-group">
                <label>Amount Paid</label>
                <input type="number" autoFocus min={0} value={amount} onChange={(event)=>setAmount(Number(event.target.value))} />
            </div>
            <h3 className="pos-margin-0">Change: {(amount > total ? amount - total : 0).toFixed(2)}</h3>
            <hr/>
            <div className="form-group">
                <button className="pos-btn">Process</button>
            </div>
        </form>
    );
}

export default Processorder;