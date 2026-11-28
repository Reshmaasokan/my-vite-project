import { useState } from "react";
import { Nav, Navbar ,Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function Navibar(){
  const navi=useNavigate()
  const [login,setLogin]=useState(true)

  const handlelogin=()=>{
    setLogin(false)
    navi("/login")
  }

  return(
    
    <>
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand className="ms-4">Ponjesly</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Button variant="primary" onClick={handlelogin}>{login?("login"):("logout")}</Button>
      </Nav>
    </Navbar>
    
    </>
  )
}