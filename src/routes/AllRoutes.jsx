import { Route, Routes } from "react-router-dom"
import { AddDetails } from "../component/AddDetails"
import { Data } from "../component/Data"

import { Home } from "../pages/Home"
import Login from "../pages/Login"
import { Logout } from "../pages/Logout"



export const AllRoutes = () => {
    return (
        <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route> 
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/data" element={<Data/>}/>
              <Route path="/add" element={<AddDetails/>}/>
            </Routes>
        </div>
    )
}