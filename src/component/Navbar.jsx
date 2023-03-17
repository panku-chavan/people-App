import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import "../Style/Navbar.css";
export const Navbar=()=>{
    const {authState,logoutUser,}=useContext(AuthContext);
    const isAuth=authState;
    return(
        <div>
            <div className="nav-item shadow p-1 mb-5 ">
           { isAuth?
                <>
                <h4><NavLink className="nav-link" to={'/data'}>Detailes</NavLink></h4>
                <h4><NavLink className="nav-link" to={'/add'}>Add Details</NavLink></h4>
                <h4 ><NavLink className="nav-link" to={'/'} onClick={()=>{logoutUser()}}>Logout</NavLink></h4>
                </> :
                <>
                <h4 ><NavLink to={'/'} className="nav-link">Home</NavLink></h4>
                <h4 ><NavLink to={'/login'} className="nav-link">Login</NavLink></h4>
                </>
            }
            </div>
        </div>
    )
}