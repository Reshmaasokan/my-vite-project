import { useMemo, useState } from "react"

export default function Memo(){
  
    const [count,setCount]=useState(0)
    const [square,setSquare]=useState(2)
    console.log("Component rendered",square);

    const result =useMemo(()=>{
            console.log("Calculating");
            return square * square;
    },[square])

 
    

    return (
      <>
        <h1>
          <span>Count:</span>
          <span>{count}</span>
        </h1>

        <h1>
          <span>Square:</span>
          <span>{result}</span>
        </h1>

        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setSquare(square + 1)}>Increase square</button>

      </>
    );
}