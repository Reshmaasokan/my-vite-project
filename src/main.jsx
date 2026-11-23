import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Bankdisplay from './pages/Reacthook/D_useReducer/Bankdisplay';
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<Bankdisplay/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
