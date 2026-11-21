import {getEndpoint,getOptions} from "./endPointCreation"
export const fetchCall  = async (path,method,body)=>{
    try{
         const url=getEndpoint(path)
         const option=getOptions(method,body)
         const response=await fetch(url,option)
         const responseData=await response.json()
         return responseData
    }
    catch(error){
        console.log("Error:::>",error)
    }

}