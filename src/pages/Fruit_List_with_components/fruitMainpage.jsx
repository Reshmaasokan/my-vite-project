import { useState } from "react"
import DisplayFruitList from "./components/DisplayFruitList"
export default function FruitMainpage(){

    const [fruit,setFruit]=useState(["apple","orange","grapes","kiwi"])

    const [newfruit,setNewfruit]=useState([])

    const [message,setMessage] =useState(null)

    const handleevent=(e)=>{
          e.preventDefault()
          setFruit([
            ...fruit,
            newfruit
          ])
          setMessage("Added")
    }



    return (
      <>
        <div>{message === "Added" ? (
            <div className="alert alert-success"></div>
          ) : message === "edit" ? (
            <div className="alert alert-success"></div>
          ) : message === "delete" ? (
            <div className="alert alert-success"></div>
          ) : message === "duplicate" ? (
            <div className="alert alert-danger"></div>
          ) : (
            message
          )}
        </div>
        <div>
          <DisplayFruitList
            fruit={fruit}

          />
        </div>

        <div>
          <form onSubmit={handleevent}>
            <div className="container d-flex gap-1 w-50 mt-4">
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
              <button className="bg-info">Add</button>
            </div>
          </form>
        </div>
      </>
    );
}
