import React from "react"
import { SET_ADMIN } from "../action/user.action"

const UserReducer =(state:any, action:any) =>{ 
    switch(action.type){
 case SET_ADMIN :
const localStorageData=[
    {
        admin:action.payload
    },{
        isLoggedInAdmin:true
    }
]

    localStorage.setItem("admin", JSON.stringify (action.payload))
return{...state , admin:action.payload, isADminPreasent:true}
    }

}
export default UserReducer