import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchApiCall } from "../Service/endPoint.call"

export default function User(){

  const {id} = useParams() 
    const [user,setUser]=useState(null)

    useEffect(()=>{

        const endPointPathname=id?`user/${id}`: "user"
        console.log(id);
        console.log(endPointPathname)

        fetchApiCall(endPointPathname,"get",{})

        .then((data)=>setUser(data))

        .catch((error)=>console.log(error))

    },[id])
    
    return(
    <>
        <div className="h1 text-center text-primary">User Page</div>
        <div>User {id}</div>
        <div>{JSON.stringify(user)}</div>
    </>
)
}