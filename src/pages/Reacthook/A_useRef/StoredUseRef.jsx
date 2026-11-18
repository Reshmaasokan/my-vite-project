import { useRef } from "react"

export default function StoredUseRef(){
    const countref=useRef(0)

    const countElemtref=useRef()
    

    const handleAdd=()=>{
        countref.current=countref.current+1
        countElemtref.current.innerText=countref.current
        console.log(countref.current)
    }
    return(
        <>
        <div>
            <h4>
                <span>Count:</span>
                <span ref={countElemtref}>{countref.current}</span>
            </h4>
            <button onClick={handleAdd} >Add</button>
        </div>
        </>
    )
}