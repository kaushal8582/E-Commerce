import { createContext, useState } from "react";


const mycontext = createContext({
    token : "",
    isLogin : false,
    login : (token)=>{},
    logout : ()=>{}
})


export const AuthProvider = (props)=>{
    let initialValue = localStorage.getItem("token");
    const [token,setToken] = useState(initialValue);

    let  isLogined = !!token

    function Login(token,email){
        setToken(token);
        localStorage.setItem("token",token);
        localStorage.setItem("user",email);
    }

    function LogOut(){
        setToken(null);
        localStorage.removeItem("token")
        localStorage.removeItem("user");
    }

    const context ={
        token : token,
        isLogin : isLogined,
        login : Login,
        logout : LogOut
    }



    return <mycontext.Provider value={context} >
        {props.children}
    </mycontext.Provider>
}




export default mycontext;