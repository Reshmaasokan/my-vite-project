import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Mainpage from './pages/Simple_loop_with_table/Mainpage';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<Mainpage/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
