import { useState } from "react"
import DisplayFruitList from "./components/DisplayFruitList"
import AddfruitList from "./components/AddfruitList"
import Search from "./components/Search";
import EditFruit from "./components/EditFruit";

export default function FruitMainpage(){

    const [fruit,setFruit]=useState(["apple","orange","grapes","kiwi"])

    const [message,setMessage] =useState(null)

    const [filter, setFilter] = useState(null);

    const [editIndex, setEditIndex] = useState(null);

    return (
      <>
        <div className="container w-50">
          <div>
            {message === "Added" ? (
              <div className="alert alert-success">Added Successfully</div>
            ) : message === "edit" ? (
              <div className="alert alert-success">Edited Successfully</div>
            ) : message === "delete" ? (
              <div className="alert alert-success">Deleted Successfully</div>
            ) : message === "duplicate" ? (
              <div className="alert alert-danger">Already Exist</div>
            ) : message === "empty" ? (
              <div className="alert alert-danger">Not in the List</div>
            ) : null}
          </div>
        </div>

        <div>
          <Search fruit={fruit} setFilter={setFilter} setMessage={setMessage} />
        </div>

        <div>
          <DisplayFruitList
            fruit={filter !== null ? filter : fruit}
            setFruit={setFruit}
            setMessage={setMessage}
            setEditIndex={setEditIndex}
          />
        </div>

        <div>
          <EditFruit
            fruit={fruit}
            setFruit={setFruit}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            setMessage={setMessage}
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
