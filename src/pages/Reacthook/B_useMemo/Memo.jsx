import { useMemo, useState } from "react"

export default function Memo(){
    const [count,setCount]=useState(0)

    const result =useMemo(()=>{
            console.log("Calculating");
            return 10 * 10;
    },[])

 
    const square=result

    return (
      <>
        <h1>
          <span>Count:</span>
          <span>{count}</span>
        </h1>

        <h1>
          <span>Square:</span>
          <span>{square}</span>
        </h1>

        <button onClick={() => setCount(count + 1)}>Increase</button>
      </>
    );
}