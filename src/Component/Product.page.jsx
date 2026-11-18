import { useEffect } from "react"
import {useLocation} from "react-router-dom"
export default function Product(){
    const location=useLocation()

    useEffect(()=>{
        if(location.search!=""){
            const queryParams=new URLSearchParams(location.search)
            const id=queryParams.get("id")
            console.log(id)
        }
    },[])
    return(
        <>
            <div className="h1 text-center">Product Page</div>



        </>
    )
}