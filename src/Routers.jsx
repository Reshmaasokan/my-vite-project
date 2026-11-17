import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navibar from "./Components/Navibar";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";
export default function Routers(){
    return (
      <>
        <Container>
          <BrowserRouter>
            <Navibar />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
        </Container>
      </>
    );
}