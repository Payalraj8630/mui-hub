import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";

const userContext =createContext({});

const initialstate ={
isloading:false
}

export const UserProvider =({children}:any) =>{
    const[state,dispatch] =useReducer(UserReducer,initialstate)
        
       const handlelogin = async(values:any) => {
      const response = await axios.post( '${API}/admin/login',{...values})
      console.log({response})
       }
        


    return(
        <userContext.Provider value={{...state , handlelogin}}>{children} </userContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(userContext)
}