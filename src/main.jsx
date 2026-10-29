import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import C_profileinfo from './pages/ternaryoperationrendering/C_profileinfo';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<C_profileinfo/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
