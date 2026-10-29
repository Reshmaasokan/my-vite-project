import { useState } from "react"
import DisplayList from '../Simple_loop/DisplayList'
import AddList from "./AddList"

export default function MainPage(){
    const [fruits,setFruits]=useState(['apple','orange','grapes','pineapple'])

    const [display,setDisplay]=useState(false)

    const handleAdd=(e)=>{
        e.preventDefault()
        setFruits({
          ...fruits,
          fruits:e.target.value
        })
        setDisplay(!display)
    }

    return (
      <>
        <div className="h4 text-center">Fruit list</div>
        <div>
          {!display ? (
            <DisplayList
               fruits={fruits}
               display={display}
               setDisplay={setDisplay}
            />
          ) : (
            <AddList
            handleAdd={handleAdd}
            
            />
            )
          }
        </div>
      </>
    );
}