import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Callback from './pages/Reacthook/C_useCallback/Callback';
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<Callback/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
