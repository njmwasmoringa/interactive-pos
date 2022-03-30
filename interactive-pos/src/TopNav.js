import "./assets/css/style.css";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./auth/userProvider";

export function TopNav({onSignOut, base}){

    const [user, setUser] = useContext(UserContext);
    
    return (
        <div className="pos-top-bar pos-display-flex pos-flex-center pos-flex-justify-between">
            <h3 className="pos-padding-5">AIPOS</h3>
            {user && <nav className="pos-display-flex">
                <NavLink to={base+"/order"} className="pos-btn pos-btn-secondary" style={{marginRight:"10px"}}>Order</NavLink>
                <NavLink to={base+"/orders"} className="pos-btn pos-btn-secondary" style={{marginRight:"10px"}}>Checkout</NavLink>
                <NavLink to={base} className="pos-btn" style={{marginRight:"10px"}}>{user.name}</NavLink>
                <a href className="pos-btn" onClick={onSignOut}>Sign Out</a>
            </nav>}
        </div>
    )
}