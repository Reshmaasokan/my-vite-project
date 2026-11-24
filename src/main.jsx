import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import User from './pages/Reacthook/E_customHook/User';
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<User/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
