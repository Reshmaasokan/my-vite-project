import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import B_UseRefs from './pages/Reacthook/A_useRef/B_UseRefs';
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<B_UseRefs/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
