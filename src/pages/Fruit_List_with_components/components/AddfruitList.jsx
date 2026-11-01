import { useState } from "react";

export default function Addfruit({
    fruit,
    setFruit,
    setMessage,
}) {

const [newfruit,setNewfruit]=useState("")


  const handleevent = (e) => {
    e.preventDefault()

    if(newfruit.trim()===""){
        return
    }

    const availability=fruit.find((value)=>value.toLowerCase()===newfruit.toLowerCase())

    if(availability===undefined){
            setFruit([
                ...fruit, 
                newfruit
            ]);
            setMessage("Added");
            setNewfruit("")
    }
    else{
        setMessage("duplicate")
    }

  };

  return (
    <>

      <div className="container d-flex gap-1 w-50 mt-4">
        <form onSubmit={handleevent}>
          <label htmlFor="newfruitlist" className="form-label">
            Add fruit
          </label>
          <input
            type="text"
            name="newfruit"
            id="newfruitlist"
            className="form-control"
            value={newfruit}
            onChange={(e) => {
              setNewfruit(e.target.value);
            }}
          />
          <button type="submit" className="bg-info">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
