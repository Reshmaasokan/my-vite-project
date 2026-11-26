import { BrowserRouter,Route,Routes } from "react-router-dom";
import Counter from "./pages/Counter-1/Counter";
import CounterDetails from "./pages/Counter-2/CounterDetails";
import Navibar from "./Components/Navibar";
export default function Routers(){
  return(
    <>
    <BrowserRouter>
    <Navibar/>
    <Routes>
      <Route index element={<Counter/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/CounterDetails" element={<CounterDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}