import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AddDetails } from "../component/AddDetails"
import { Data } from "../component/Data"
import { AuthContext } from "../context/AuthContext"

import { Home } from "../pages/Home"
import Login from "../pages/Login"
import { Logout } from "../pages/Logout"



export const AllRoutes = () => {
    const {authState}=useContext(AuthContext);
    const isAuth=authState.isAuth;
    return (
        <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route> 
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/data" element={isAuth ? <Data/> : <Home/>}/>
              <Route path="/add" element={ isAuth ? <AddDetails/> : <Home/>}/>
            </Routes>
        </div>
    )
}