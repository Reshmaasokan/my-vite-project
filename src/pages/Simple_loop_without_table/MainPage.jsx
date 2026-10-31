import { useState } from "react"
 
export default function MainPage(){
  
  const[fruit,setFruit]=useState(["apple","orange","strawberry","banana"])

  const [newfruit,setNewfruit]=useState("")

  const [edit,setEdit]=useState(false)

  const [status,setStatus]=useState(null)

  const handlechange=(e)=>{
    setNewfruit(e.target.value)
  }

  const handlesubmit=(e)=>{
    e.preventDefault()

    if(newfruit.trim()===""){
      return;
    }

    const findAvailability=fruit.find(value =>value.toLowerCase() ==newfruit.toLowerCase())

    if(findAvailability === undefined){
      setFruit([
       ...fruit,
       newfruit
    ])

        setNewfruit("")
        setEdit(false)
        setStatus(true)
    }
    else{
      setStatus(false)
    }



  }

   
  return (
    <>
      <div className="text-center text-primary h1">Fruits List</div>

      <div className="container">{ !edit ? 
      (
        <div className="container text-info">
          {fruit.map((value, index) => {
            return <p key={index}>{value}</p>;
          })}
          <button className="btn-primary" onClick={()=>{
            setEdit(true)
          }}>Edit</button>
        </div>
        

      )
      :
      (

        <div className="container">
          <div>
            {status === null ? 
            (null):
            (status===true)? ("Fruit added successfully")
            : ("Fruit already exist try another fruit!!")
            }
          </div>

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

      )
      }
      </div>


    </>
  );
}