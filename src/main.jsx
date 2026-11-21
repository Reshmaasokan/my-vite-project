import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Memo from './pages/Reacthook/B_useMemo/Memo';
function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<Memo/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
