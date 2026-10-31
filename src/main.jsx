import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import fruitMainpage from './pages/Fruit_List_with_components/fruitMainpage';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<fruitMainpage/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
