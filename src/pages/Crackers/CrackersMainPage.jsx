import { useEffect, useState } from "react"
import DisplayCrackers from "../Crackers/components/DisplayCrackers"
import AddCrackers from "./components/AddCrackers"
/*import DeleteCrackers from "../Crackers/components/DeleteCrackers"
import UpdateCrackers from "../Crackers/components/UpdateCrackers"*/
import crackerinfo from "../Crackers/CrackersDetails/crackers.json"
export default function CrackersMainPage(){

    const [cracker,setCracker]=useState([])
    const [showadd,setShowAdd]=useState(true)

    const addform=()=>{
      setShowAdd(!showadd)
    }
    useEffect(()=>{
      setCracker(crackerinfo)
    },[])
     
    return (
      <>
        <div>
          {showadd ? (
            <>
              <DisplayCrackers cracker={cracker} />
              <div className="container">
                <button className="btn btn-primary" onClick={addform}>
                  Add crackers
                </button>
              </div>
            </>
          ) : (
            <AddCrackers 
            setCracker={setCracker}/>
          )}
        </div>
      </>
    );
}