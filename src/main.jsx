import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProductList from './pages/ProductList'



function App(){
  const[show,setShow]=useState(true)
  return <div>{show && <ProductList />}</div>;
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
