import { createContext, useState } from "react";

export const AuthContext=createContext(null);

const AuthContextProvider = ({children})=>{
    const [authState,setAuthState]=useState({
        isAuth:false
    });

    const loginUser=()=>{
        setAuthState({
            ...authState,
            isAuth:true
        });
    }
    const logoutUser=()=>{
        setAuthState({
            ...authState,
            isAuth:false
        });
    }
    return(
        <AuthContext.Provider value={{authState:authState,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;