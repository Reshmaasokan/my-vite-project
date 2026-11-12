import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
/*import FruitMainpage from './pages/Fruit_List_with_components/fruitMainpage';*/
import TableComponent from './pages/Table/TableComponent';



function App(){
  const[show,setShow]=useState(true)
  return(
    <div>{show && (<TableComponent/>)
      }</div>
  )
}
createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
)
