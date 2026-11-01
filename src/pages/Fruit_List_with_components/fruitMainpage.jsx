import { useState } from "react"
import DisplayFruitList from "./components/DisplayFruitList"
import AddfruitList from "./components/AddfruitList"

export default function FruitMainpage(){

    const [fruit,setFruit]=useState(["apple","orange","grapes","kiwi"])

    const [message,setMessage] =useState(null)

    return (
      <>
      <div className="container">
        <div>{message === "Added" ? (
            <div className="alert alert-success">Added Successfully</div>
          ) : message === "edit" ? (
            <div className="alert alert-success">Edited Successfully</div>
          ) : message === "delete" ? (
            <div className="alert alert-success">Deleted Successfully</div>
          ) : message === "duplicate" ? (
            <div className="alert alert-danger">Already Exist</div>
          ) : null}
        </div>

      </div>

        <div>
          <DisplayFruitList
            fruit={fruit}

          />
        </div>

        <div>
          <AddfruitList
          fruit={fruit}
          setFruit={setFruit}
          setMessage={setMessage}
          />
        </div>
      </>
    );
}
