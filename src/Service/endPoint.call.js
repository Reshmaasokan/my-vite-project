import { getEndpoint,getOption } from "./endPoint.creation"
export const fetchApiCall=async (path,method,body={}) =>{
    try{
        const url=await getEndpoint(path)
        const option=await getOption(method,body)
        const response= await fetch(url,option)
        const responseData=await response.json()
        return responseData
    }
    catch(error){
        console.log("error:::>",error)
    }
    
    
}