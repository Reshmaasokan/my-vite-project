import { useState } from "react"

export default function OnEvent(){
     
    const [name,setName]=useState(["Reshma"])
    const [newname,setNewname]=useState(null)
    const handelchange=(e)=>{
        e.preventDefault()
        setNewname(e.target.value)
    }

    const addName=()=>{
        setName([
            ...name,
            newname
        ])
    }
    return(
        <>
        <div className="container">

          <div className="h1">Name:
             <span>{name}</span>
          </div>

          <div>
             <label className="form-label"></label>
             <input type="text" 
                    className="form-check" 
                    onChange={handelchange} 
            />

            <button type="submit" className="btn-primary" 
                    onClick={addName}>
             Add
            </button>
          </div>

        </div>
          

        </>
    )
} 