import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navibar(){
  const [login,SetLogin]=useState(true)

  const handleLogin=()=>{
    SetLogin(false)
  }

  return(
    
    <>
    <Navbar>
      <Navbar.Brand>WebSite</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Button variant="primary" onClick={handleLogin}>{login?("Login"):("Logout")}</Button>
      </Nav>
    </Navbar>
    </>
  )
}