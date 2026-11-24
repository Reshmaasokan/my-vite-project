import { useCallback, useState } from "react";
import ChildComponent from "./B_ChildComponent";

export default function ParentComponent(){
    const [count,setCount]=useState(0)
    const name=useCallback(()=>{
        console.log("Function props")
    },[count])

    return(
        <>
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
        <ChildComponent name={name}/>
        </>
    )
}