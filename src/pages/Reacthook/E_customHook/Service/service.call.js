import {getEndPoint,getOption} from "./service.endpoint"
export const fetchapi=async (path,method,body={})=>{
    try{
        const endPoint=getEndPoint(path)
        const endOption=getOption(method,body)
        const response= await fetch(endPoint,endOption)
        const responseData= await response.json()
        return responseData
    }
    catch(error){
        console.log("Error:::>",error)
    }
}