import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import StoredUseRef  from './pages/Reacthook/A_useRef/StoredUseRef';

function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<StoredUseRef/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
