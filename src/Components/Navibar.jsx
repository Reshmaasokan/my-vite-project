import { useContext } from "react";
import { Nav, Navbar ,Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";

export default function Navibar(){
  const navi=useNavigate()
  const {loginstatus,setLoginStatus}=useContext(Authcontext)

  const handlelogin=()=>{
    navi("/login")
  }

  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand className="ms-4">Ponjesly</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          {loginstatus ? 
            (
              <Button
                variant="outline-danger" 
                onClick={() => setLoginStatus(false)}
              > Logout
              </Button>
            ) : 
            (
              <Button
                variant="outline-light"
                onClick={handlelogin}
              > Login
              </Button>
            )}
           
          
        </Nav>
      </Navbar>
    </>
  );
}