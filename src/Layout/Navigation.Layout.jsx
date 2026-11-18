import {Navbar,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
export default function NavigationLayout(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">MY PROFILE</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/product">Product</Nav.Link>
            </Nav>
        </Navbar>
        
            
        </>
    )
}
