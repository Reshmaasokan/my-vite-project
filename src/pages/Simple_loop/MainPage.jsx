import { useState } from "react"
 
export default function MainPage(){
  
  const[fruit,setFruit]=useState(["apple","orange","strawberry","banana"])

  const [newfruit,setNewfruit]=useState("")

  const handlechange=(e)=>{
    setNewfruit(e.target.value)
  }

  const handlesubmit=(e)=>{
    e.preventDefault()

        setFruit([
       ...fruit,
       newfruit
    ])
    alert("Button clicked!");
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

      <div className="container">

        <form onSubmit={handlesubmit}>

          <label className="form-label">
            Enter the fruit
          </label>
          <input
            type="text"
            className="form-control w-50"
            name="newfruits"
            placeholder="Type the fruit"
            value={newfruit}
            onChange={handlechange}
          />

          <button
          type="submit"
          className="btn btn-primary mt-3"
          >
          Add
          </button>

        </form>

      </div>
    </>
  );
}