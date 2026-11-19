
import { useRef } from "react";
export default function B_UseRefs(){
    const s1ref=useRef(null)
    const s2ref=useRef(null)
    const prevCount=useRef(0)
    const curCount=useRef(0)

    const countref=useRef(1)

    const handleAdd=()=>{
        prevCount.current=countref.current
        countref.current=countref.current+1
        curCount.current=countref.current
        s1ref.current.innerText=prevCount.current
        s2ref.current.innerText=curCount.current
        console.log(prevCount.current)
        console.log(curCount.current)
    }


    return (
      <>
        <div>
          <h1>
            <span>Previous Count :</span>
            <span ref={s1ref}>{prevCount.current}</span>
          </h1>
        </div>

        <div>
          <h1>
            <span>Current Count:</span>
            <span ref={s2ref}>{curCount.current}</span>
          </h1>
        </div>
        <div>
            <button onClick={handleAdd}>Add</button>
        </div>
      </>
    );
}