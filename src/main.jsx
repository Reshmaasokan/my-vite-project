import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Apps from './Apps';
/*import Header from './component/Header';*/
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<Apps/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
