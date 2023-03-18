import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [pswd, setPswd] = useState('');
    const navigate = useNavigate();
    const { loginUser }=useContext(AuthContext);
    const notify=()=>{
        toast("Login Successfull.");
    }
    const HandleSubmit = (event) => {
        event.preventDefault();
        if(user==='user' && pswd==='user'){
            notify();
            loginUser();
            navigate('/data')
        }
       // console.log(user, pswd)
    }
    return (

        <div className="container w-50 shadow p-3 mt-5  bg-white rounded">
            <form action="" onSubmit={HandleSubmit}>
                <div className="form-group  ">
                    <h2 className=" mb-4">Login</h2>
                    
                    <input className="form-control mb-3" placeholder="Username" type="text" onChange={(e) => setUser(e.target.value)} />
                    
                    <input className="form-control" placeholder="password" type="password" onChange={(e) => setPswd(e.target.value)} />
                    <button className="btn btn-primary mt-3" type="submit">Login</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Login;