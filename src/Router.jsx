import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home.page"
import About from "./pages/About.page"
import Contact from "./pages/Contact.page"
import Dashboard from "./pages/Dashboard"
import Header from "./component/Header"
import Login from "./pages/Login.page"
export default function Router(){
    return(
        <>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={
                    <ProtectionRoute>
                        <Dashboard/>
                    </ProtectionRoute>
                }/>

            </Routes>
        </BrowserRouter>
        
        </>
    )
}

export function ProtectionRoute ({children}){
    return children
}