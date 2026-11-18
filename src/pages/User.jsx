import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchApiCall } from "../Service/endPoint.call"

export default function User(){
    const id=useParams()
    const [user,setUser]=useState([])

    
    useEffect(()=>{
        const endPointPathname=id['user-id']?`user/${id["user-id"]}`: "user"
        fetchApiCall(endPointPathname,"get",{})
        .then((data)=>setUser(data))
        .error((error)=>console.log(error))
    },[])
    
    return(
    <>
        <div className="h1 text-center text-primary">User Page</div>
        <div>User {id}</div>
        <div>{JSON.stringify(user)}</div>
    </>
)
}