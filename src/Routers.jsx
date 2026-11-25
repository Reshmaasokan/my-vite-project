import { BrowserRouter,Route,Routes } from "react-router-dom";
 const Home=lazy(()=>import("./pages/Home"));
 const About=lazy(()=>import("./pages/About"))
 const Contact=lazy(()=>import("./pages/Contact"))
 const Login=lazy(()=>import("./pages/Login"))
 import Navibar from "./Components/Navibar"
import { Container } from "react-bootstrap";
import { Suspense,lazy } from "react";
export default function Routers(){
    return (
      <>
        <Container>
          <BrowserRouter>
          <Navibar />
          <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login/>}/>
            </Routes>
            </Suspense>
          </BrowserRouter>
        </Container>
      </>
    );
}