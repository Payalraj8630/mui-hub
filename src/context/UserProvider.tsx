import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";
import {SET_ADMIN } from "../action/user.action"
import { API } from "../constants/constants";



const userContext =createContext({});

const initialstate ={
isloading:false,
admin: {},
isAdminPresent:false
}

export const UserProvider =({children}:any) =>{
    const[state,dispatch] =useReducer(UserReducer,initialstate)
        
       const handlelogin = async(values:any) => {
        try{
            const {data}=await axios.post(`${API}/admin/login`,{...values})
            dispatch ({type:SET_ADMIN, payloads:data})
        } catch (error){
            console.log({error})
        }
        }
        return(
        <userContext.Provider value={{...state , handlelogin}}>
            {children} 
            </userContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(userContext)
}