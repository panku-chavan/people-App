import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import "../Style/Navbar.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar=()=>{
    const {authState,logoutUser,}=useContext(AuthContext);
    const isAuth=authState.isAuth;
    const notyfy=()=>{
        toast("Successfully Logout.")
    }
    const handleLogout=()=>{
        logoutUser();
        notyfy();
    }
    return(
        <div>
            <div className="nav-item shadow p-1  ">
           { isAuth?
                <>
                <h4><NavLink className="nav-link" to={'/data'}>Detailes</NavLink></h4>
                <h4><NavLink className="nav-link" to={'/add'}>Add Details</NavLink></h4>
                <h4 ><NavLink className="nav-link" to={'/'} onClick={handleLogout}>Logout</NavLink></h4>
                </> :
                <>
                <h4 ><NavLink to={'/'} className="nav-link">Home</NavLink></h4>
                <h4 ><NavLink to={'/login'} className="nav-link">Login</NavLink></h4>
                </>
            }
            </div>
            <ToastContainer/>
        </div>
    )
}