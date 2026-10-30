import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import OnEvent from './pages/Event/OnEvent';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<OnEvent/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
