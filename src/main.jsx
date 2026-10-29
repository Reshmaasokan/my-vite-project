import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MainPage from './pages/Simple_loop/MainPage.jsx';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<MainPage/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
