import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Navibar(){
    const navibar=useNavigate()
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="ms-3">User Page</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                <Button className="btn btn-primary me-2"  onClick={()=>navibar("/login")}>Login</Button>
            </Nav>
        </Navbar>
        </>
    )
}