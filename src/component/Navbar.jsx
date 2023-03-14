import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import "../Style/Navbar.css";
export const Navbar=()=>{
    const {authState,logoutUser,}=useContext(AuthContext);
    const isAuth=authState.isAuth;
    return(
        <div>
            <div className="nav-item">
           { isAuth?
                <h4 ><NavLink className="nav-link" to={'/logout'} onClick={()=>{logoutUser()}}>Logout</NavLink></h4> :
                <>
                <h4 ><NavLink to={'/'} className="nav-link">Home</NavLink></h4>
                <h4 ><NavLink to={'/login'} className="nav-link">Login</NavLink></h4>
                </>
            }
            </div>
        </div>
    )
}