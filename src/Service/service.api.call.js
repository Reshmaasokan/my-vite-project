import {getEndpoint,getOption} from "./service.endpointcreation"
export const fetchApicall=async(path,method,body)=>{
    try{
        const url=getEndpoint(path)
        const options=getOption(method,body)
        const response=await fetch(url,options)
        const responseDta= await response.json()
        return responseDta
    }
    catch(error){
        console.log("Error::",error)
    }
}