import { NavLink } from "react-router-dom"
import "../Style/Navbar.css";
export const Navbar=()=>{
    return(
        <div>
            <div className="nav-item">
                <h4 ><NavLink to={'/home'} className="nav-link">Home</NavLink></h4>
                <h4 ><NavLink className="nav-link">Logout</NavLink></h4>
                <h4 ><NavLink to={'/'} className="nav-link">Login</NavLink></h4>
            </div>
        </div>
    )
}