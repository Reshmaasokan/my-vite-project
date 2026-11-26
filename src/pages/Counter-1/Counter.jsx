import { useDispatch, useSelector } from "react-redux"
import { add,sub,mul,div } from "./Counter.slice"

export default function Counter(){

    useSelector((state)=>console.log("store details:::>",state))
    const count=useSelector(state=>state.counter.count)
    const dispatch=useDispatch()
    return(
        <>
        <h1 className="text-center text-primary">Counter App</h1>
        <div className="fw-bold h3">Count:{count}</div>
        <div className="d-flex gap-3">
            <button className="btn btn-primary" onClick={()=>dispatch(add())}>Add</button>
            <button className="btn btn-primary" onClick={()=>dispatch(sub())}>sub</button>
            <button className="btn btn-primary" onClick={()=>dispatch(mul())}>mul</button>
            <button className="btn btn-primary" onClick={()=>dispatch(div())}>div</button>
        </div>
        </>
    )
}