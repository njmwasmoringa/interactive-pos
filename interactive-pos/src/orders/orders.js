import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal";

function Orders({ orders = [], onCheckout = ()=>{} }) {

    const navigate = useNavigate();
    
    const [checkoutOrder, setCheckoutOrder] = useState(null);
    
    function checkout(){
        onCheckout(checkoutOrder);
        setCheckoutOrder(null);
    }

    
    if(!sessionStorage.getItem("user")){
        navigate("");
        return (<h4>Restricted Access</h4>)
    }

    return (
        <>
            {checkoutOrder && <Modal component={<div className="pos-padding-10">
                <div className="pos-display-flex pos-padding-0 pos-flex-justify-between">
                    <h4>Order No #{checkoutOrder.orderNumber}</h4>
                    <h4>{checkoutOrder.customer}</h4>
                </div>
                <table className="pos-table pos-table-striped">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>In Stock</th>
                            <th>Quanitity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkoutOrder.products.map(p => <tr>
                            <td>{p.name}</td>
                            <td align="center">{p.stock}</td>
                            <td align="center">{p.qty}</td>
                        </tr>)}
                    </tbody>
                </table>

                <div>
                    <button type="button" className="pos-btn" onClick={checkout}>Checkout</button>
                </div>
            </div>} dismiss={() => setCheckoutOrder(null)} />}
            

            <div className="pos-page pos-display-flex pos-flex-justify-center pos-padding-10">
                <div className="pos-card pos-w-80">
                <table className="pos-table pos-table-striped">
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Customer</th>
                            <th colSpan={2}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.filter(o=>!o.checkedOut).map(o => <tr>
                            <td>Order#{o.orderNumber}</td>
                            <td>{o.customer}</td>
                            <td>{o.total}</td>
                            <td align="right">
                                <button type="button" className="pos-btn" onClick={() => setCheckoutOrder(o)}>Checkout</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}

export default Orders;