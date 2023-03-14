import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState('');
    const [pswd, setPswd] = useState('');

    const HandleSubmit = (event) => {
        event.preventDefault();
        console.log(user, pswd)
    }
    return (

        <div className="container-sm w-25 ">
            <form action="" onSubmit={HandleSubmit}>
                <div class="form-group  ">
                    <h2 className="mt-5 mb-4">Login</h2>
                    
                    <input className="form-control mb-3" placeholder="Username" type="text" onChange={(e) => setUser(e.target.value)} />
                    
                    <input className="form-control" placeholder="password" type="text" onChange={(e) => setPswd(e.target.value)} />
                    <button className="btn btn-primary mt-3" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;