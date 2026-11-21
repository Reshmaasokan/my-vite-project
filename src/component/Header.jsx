import  { Navbar,Nav, NavbarBrand, NavLink, Button } from "react-bootstrap"
import {Link,useNavigate} from "react-router-dom"
export default function Header(){
    const navi=useNavigate()
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <NavbarBrand>My Website</NavbarBrand>
            <Nav className="ms-auto">
                <NavLink as={Link} to={"/home"}>Home</NavLink>
                <NavLink as={Link} to={"/about"}>About</NavLink>
                <NavLink as={Link} to={"/contact"}>Contact</NavLink>
                <Button variant="primary" onClick={()=>navi("/login")}>Login</Button>
            </Nav>
        </Navbar>
        </>
    )
}