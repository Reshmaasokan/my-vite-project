import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import B_ternaryOperator from './pages/ternaryoperationrendering/B_ternaryOperator';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<B_ternaryOperator/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
