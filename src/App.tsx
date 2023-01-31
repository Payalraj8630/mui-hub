import { useState } from "react";
import {Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SidebarNav from "./Components/Sidebar";
import { useUserContext } from "./context/UserProvider";
import Category from "./Pages/category";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";


function App() {
  const {admin ,isAdminPresent}:any =useUserContext()
 console.log({admin})

 const[isUserPresent,setUserPresent] =useState(isAdminPresent)
 const localStorageItems=()=>{
  const getLocalStorageItem:any =localStorage.geiItem("admin")
const localvalue =JSON.parse(getLocalStorageItem)
 setUserPresent(localvalue[1].isLoggedInAdmin)
 }

useEffect (() =>{
  localStorageItems()
},[])

  return (
  <BrowserRouter>
  <div style={{display:"flex"}}>
    { ! isUserPresent ? (<Routes>
    <Route path="/signup" element={<Signup />}></Route>
    </Routes>
    ) : (
    <> <SidebarNav />
   <Routes>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/category" element={<Category />}></Route>
    </Routes>
    </>
    )  
  }
 </div>

     </BrowserRouter>
    )
}

export default App;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

