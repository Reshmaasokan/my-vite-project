import { useCallback, useState } from "react"

export default function Callback(){
    const [count,setCount]=useState(0)
    const display=useCallback(()=>{
        console.log("ENtered inside the function")
    },[count])
    return(
        <>
        <div>
            <button className="btn btn-primary"onClick={()=>setCount(count+1)}>Increase</button>
            <button className=" ms-3 btn btn-primary" onClick={display}>Display</button>
        </div>
        </>
    )
}