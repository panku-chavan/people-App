import { NavLink } from "react-router-dom"
import "../Style/Navbar.css";
export const Navbar=()=>{
    return(
        <div>
            <div className="nav-item">
                <h3 className="nav-link"><NavLink to={'/'}>Login</NavLink></h3>
                <h3 className="nav-link"><NavLink to={'/home'}>Home</NavLink></h3>
                <h3 className="nav-link"><NavLink>Logout</NavLink></h3>
            </div>
        </div>
    )
}