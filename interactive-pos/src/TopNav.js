import "./assets/css/style.css";
import { NavLink } from 'react-router-dom';

export function TopNav(){
    return (
        <div className="pos-top-bar pos-display-flex pos-flex-center pos-flex-justify-between">
            <h3 className="pos-padding-5">AIPOS</h3>
            <nav className="pos-display-flex">
                <NavLink to="/" className="pos-padding-5 pos-btn">Login</NavLink>
                <NavLink to="/order" className="pos-padding-5 pos-btn">Order</NavLink>
                <NavLink to="/orders" className="pos-padding-5 pos-btn">Orders</NavLink>
                <NavLink to="/checkout" className="pos-padding-5 pos-btn">Checkout</NavLink>
            </nav>
        </div>
    )
}