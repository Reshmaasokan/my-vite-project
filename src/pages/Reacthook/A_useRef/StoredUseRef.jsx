import { useEffect, useRef, useState } from "react"

export default function StoredUseRef(){

    const [count,setCount]=useState(0)

    const countPreviousref=useRef()


    const handleAdd=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        countPreviousref.current=count
    },[count])

    return(
        <>
        <div>
            <h4>
                <span>Previous Count:</span>
                <span ref={countPreviousref}>{countPreviousref.current}</span>
            </h4>

            <h4>
                <span>Current Count:</span>
                <span>{count}</span>
            </h4>
            <button onClick={handleAdd} >Add</button>
        </div>
        </>
    )
}