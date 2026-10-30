import { useState } from "react"
 
export default function MainPage(){
  
  const[fruit,setFruit]=useState(['apple','orange','strawberry','banana'])
   
  return(
    <>

    <div className="text-center text-primary h1">Fruits List</div>

    <div className="container text-info">{fruit.map((value,index)=>{
      return(
        <p key={index}>{value}</p>
      )
      })}

    </div>

    <div className="btn btn-primary" onClick={()=>{
      setFruit({
        ...fruit,
        mango
      })
    }}>Add</div>

    </>
  )
}