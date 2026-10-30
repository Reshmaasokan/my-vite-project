import { useState } from "react"


export default function MainPage(){
    const [fruits,setFruits]=useState(['apple','orange','grapes','pineapple'])

    const [display,setDisplay]=useState(false)

    const [newfruits,setNewfruits]=useState("")

    const edit=()=>{
      setDisplay(!display)
    }

    const handleAdd=(e)=>{
        e.preventDefault()
        setNewfruits(e.target.value)
    }

    const addfruit=()=>{ setFruits({...fruits [newfruits]})}

    return (
      <>
        <div className="h4 text-center">Fruit list</div>
        <div>
          {!display ? 
          (
            <div className="container">

              <ul>
                {fruits.map((values, index) => {
                  return <p key={index}>{values}</p>;
                })}
              </ul>

              <button
                className="btn-primary"
                onClick={edit}
              >Edit</button>

            </div>
          ) : 
          (
            <div className="container">
              <div className="h4 text-center text-primary">Add the fruit</div>
                <label className="form-label">Add fruits</label>
                <input className="form-control" type="text" name="newfruits" onChange={handleAdd} placeholder="Enter fruit name"/>
                <button className="mt-3" onClick={addfruit}>
                Add
              </button>
            </div>

          )
        }
        </div>
      </>
    );
}