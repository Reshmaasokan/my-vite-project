import { BrowserRouter, Routes,Route, Navigate, replace } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Navibar from "./Components/Navibar";
import Dashboard from "./pages/Dashboard";

export default function Routers(){

  return(
    <>
    <BrowserRouter>
    <Navibar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={
        <ProtectionRoute>
          <Dashboard/>
        </ProtectionRoute>
      }/>
    </Routes>
    </BrowserRouter>
    </>

  )
  
  function ProtectionRoute({children}){
    const login=localStorage.getItem("token")?(true):(false)
    if(!login){
      return <Navigate to={"/login"} replace/>
    } 
    return children
  }
}