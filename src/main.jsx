import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import BasicMainPage from './pages/BasicFormwithjson/BasicMainPage'



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<BasicMainPage/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
