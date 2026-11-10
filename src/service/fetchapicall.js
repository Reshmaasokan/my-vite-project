import { getEndPoint,getOption } from "./service"
export const fetchApicall=async(Endpoint,Method,body={})=>{
 try{
    const url=getEndPoint(Endpoint)
    const option=getOption(Method,body)
    const response=await fetch(url,option,body)
    const responseData= await response.json()
    return responseData
 }catch(error){
      console.log("Error::::",error)
 }
}