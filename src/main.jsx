import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import OnchangeText from './pages/function_component/onChange/OnchangeText';


function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<OnchangeText/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
