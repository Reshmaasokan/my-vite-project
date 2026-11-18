import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import User from "./pages/User"
import Navibar from "./Components/Navibar";
export default function Routers(){
  return(
    <>
    <BrowserRouter>
    <Navibar/>
      <Routes>
        
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user/:id" element={<User/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}