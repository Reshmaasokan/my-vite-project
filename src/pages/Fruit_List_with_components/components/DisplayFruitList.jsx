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
  
  const searchevent=(e)=>{
    e.preventDefault()
    
  }
  return (
    <>

        <div className="container w-50 d-flex gap-2">
          <form onSubmit={searchevent}>
            <label htmlFor="searching" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="searching"
              value={searchElement}
              onChange={(e)=>{setSearchElement(e.target.value)}}
            />
            <button type="submit">Search</button>
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
            {fruit.map((value, index) => {
              return (
                <tr>
                  <td key={index}>{index + 1}</td>
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
