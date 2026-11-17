import { Container, Navbar,Nav, Button, Image } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import image from "../assets/profile.jpg"


export default function Navibar(){
    const navi=useNavigate()
    return(
    <>
    <Navbar variant="dark" bg="dark">
        <Container>
            <Navbar.Brand as={Link} to={"/"}>
            <Image src={image} alt="profileimg" width={"30"} height={"40"} roundedCircle className="me-2"/>
            Profile
            </Navbar.Brand>

            <Nav className="align-item-center ms-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link}to={"/contact"}>Contact</Nav.Link>
            </Nav>

            <Button variant="primary" className="ms-2" onClick={()=>{navi("/login")}}>Login</Button>
        </Container>

    </Navbar>


   
    </>
    )
}