import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ParentComponent from './A_ParentComponent';
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<ParentComponent/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
