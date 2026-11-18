import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Component/Home.page"
import About from "./Component/About.Page"
import Product from "./Component/Product.page"
import NavigationLayout from "./Layout/Navigation.Layout"
import PageNotFound from "./Component/Page.Not.Found"
export default function Routering(){
    return (
      <>
        <BrowserRouter>
          <NavigationLayout />
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/product" element={<Product />}/>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
}