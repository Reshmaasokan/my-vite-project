import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import { fetchApiCall } from "../../Service/Apicall"
export default function Product(){
    const location=useLocation()
    const [product,setProduct]=useState([])

    useEffect(()=>{
        if(location.search!=""){
            const queryParams=new URLSearchParams(location.search)
            const id=queryParams.get("id")

            fetchApiCall("product","get")
              .then((data)=>setProduct(data))
              .catch((error)=>console.log(error))
        }
    },[])
    return(
        <>
            <div className="h1 text-center">Product Page</div>



        </>
    )
}