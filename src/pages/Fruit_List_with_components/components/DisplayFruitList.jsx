import { useState } from "react"

export default function DisplayFruitList({
    fruit,
    setFruit,
    setMessage
}) {

  const handledelete=(fruitindex)=>{
      const deleteelmt=fruit.filter((value,index)=>index!=fruitindex)
      setFruit(
        deleteelmt
      )
      setMessage("delete")
  }

  const [searchElement,setSearchElement]=useState("")

  const [filter, setFilter] = useState(null);
  
  const searchevent=(e)=>{
    e.preventDefault()
    if(searchElement.trim()===""){
      setFilter(null)
      setMessage("empty")
      return;
    }
    
      const check=fruit.filter((value)=>value.toLowerCase().includes(searchElement.trim().toLowerCase()))
      if(check.length===0){
        setMessage("empty")
      }
      else{
        setMessage(null)
      }
      setFilter(check)
      setSearchElement("")
    
    
  }
  return (
    <>
      <div className="container w-50 d-flex gap-2">
        <form onSubmit={searchevent}>
          <label htmlFor="searching" className="form-label">
            Search fruit
          </label>
          <input
            type="text"
            className="form-control"
            id="searching"
            value={searchElement}
            onChange={(e) => {
              setSearchElement(e.target.value);
            }}
          />
          <button type="submit">Search</button>

          <button
            type="button"
            onClick={() => {
              setFilter(null);
              setMessage(null);
            }}
          >
            Show All
          </button>
        </form>
      </div>


      <div className="container w-50 mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {(filter !== null ? filter : fruit).map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value}</td>
                  <td>
                    {
                      <div className="d-flex gap-2">
                        <button className="bg-success">edit</button>
                        <button
                          className="bg-danger"
                          onClick={() => handledelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
