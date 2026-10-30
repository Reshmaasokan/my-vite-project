import { useState } from "react"
 
export default function MainPage(){
  
  const[fruit,setFruit]=useState(['apple','orange','strawberry','banana'])

  const [newfruit,setNewfruit]=useState(" ")

  const handlechange=(e)=>{
        e.preventDefault()
        const fieldName=e.target.name
        const fieldValue=e.target.value
        setNewfruit({
         [fieldName]:fieldValue
        }
        )
    
  }

  const addfruit=()=>{
    setFruit({
      ...fruit
      [newfruit]
    })
    setNewfruit("")
  }
   
  return (
    <>
      <div className="text-center text-primary h1">Fruits List</div>

      <div className="container text-info">
        {fruit.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>

      <div>

        <div className="container">
          <span><label className="label-form">Enter the fruit</label></span>
          <span><input
            type="text"
            className="form-control w-50"
            name="newfruit"
            placeholder="Type the fruit"
            onChange={handlechange}
          /></span>

        <div
          className="btn btn-primary mt-3"
          onClick={addfruit}
        >
          Add
        </div>

        </div>


      </div>
    </>
  );
}