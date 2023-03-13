import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState('');
    const [pswd, setPswd] = useState('');

    const HandleSubmit = (event) => {
        event.preventDefault();
        console.log(user, pswd)
    }
    return (

        <div>
            <form action="" onSubmit={HandleSubmit}>
                <input type="text" onChange={(e) => setUser(e.target.value)} />
                <input type="text" onChange={(e) => setPswd(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;