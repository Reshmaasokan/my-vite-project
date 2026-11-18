import { useRef } from "react"
export default function UseRefs(){
    const Inputref=useRef()
    const handleEvent=()=>{
      Inputref.current.focus()
    }
    console.log(Inputref)
    return (
      <>
        <div className="container">
          <input type="text" ref={Inputref}/>
          <button onClick={handleEvent}>Click</button>
        </div>
      </>
    );
}