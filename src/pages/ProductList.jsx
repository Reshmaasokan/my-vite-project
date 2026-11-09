import { useEffect, useState } from "react"

export default function ProductList(){
    const [display,setDisplay]=useState([])

    useEffect(()=>{
        fetchApicall("product","get")
        .then((data)=>setDisplay(data))
        .catch((error)=>(console.error(error)))
    },[])
    return(
        <>
        <div className="container">
            <div className="h1 text-center">Product</div>
            <div>{display}</div>
        </div>
        
        </>
    )
}