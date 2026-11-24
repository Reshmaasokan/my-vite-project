import { useEffect, useState } from "react";
import { fetchapi } from "../Service/service.call";

export default function UseUser(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetchapi("user","get")
        .then((response)=>{setUser(response)
            console.log("Response:::>",response)
        })
        .catch((error)=>console.log(error))
    },[])
    return user
}