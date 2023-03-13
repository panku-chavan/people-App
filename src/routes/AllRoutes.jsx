import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import Login from "../pages/Login"



export const AllRoutes = () => {
    return (
        <div>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}></Route> 
            </Routes>
        </div>
    )
}