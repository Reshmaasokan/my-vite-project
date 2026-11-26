import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Navibar(){
    return (
      <>
        <Container>
          <nav className="nav gap-3 m-auto">
            <Link to={"/counter"} className="nav-link">Counter</Link>
            <Link to={"/CounterDetails"} className="nav-link">Counter Details</Link>
          </nav>
          </Container>
      </>
    );
}