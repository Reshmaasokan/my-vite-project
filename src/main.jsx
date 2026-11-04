import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import StudentHome from './pages/StudentRegistration/StudentHome'



function App(){
  const[show,setShow]=useState(true)
  return <div>{show && <StudentHome />}</div>;
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
