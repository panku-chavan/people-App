import { createContext, useRef, useState } from "react";

export const AuthContext=createContext(null);

const AuthContextProvider = ({children})=>{
    const [authState,setAuthState]=useState({
        isAuth:false
    });
    const AuthRef=useRef(authState.isAuth);
   //console.log(AuthRef.current)
    const loginUser=()=>{
        AuthRef.current=true;
        setAuthState({
            ...authState,
            isAuth:AuthRef.current
        });
    }
    const logoutUser=()=>{
        AuthRef.current=false
        setAuthState({
            ...authState,
            isAuth:AuthRef.current
        });
    }
    return(
        <AuthContext.Provider value={{authState:AuthRef.current,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;