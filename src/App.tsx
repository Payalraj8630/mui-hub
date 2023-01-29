import { useState } from "react";
import {Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SidebarNav from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";


function App() {
 const[isUserPresent,setUserPresent] =useState(false)
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
    </Routes>
    </>
    )  
  }
 
 

  </div>

     </BrowserRouter>
    )
}

export default App;
