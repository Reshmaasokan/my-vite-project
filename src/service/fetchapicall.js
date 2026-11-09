import { getEndPoint,getOption } from "./service"
export const fetchApicall=async(Endpoint,Method)=>{
 try{
    const url=getEndPoint(Endpoint)
    const option=getOption(Method)
    const response=fetch(url,option)
    const responseData= await response.json()
    return responseData
 }catch(error){
      console.log("Error::::",error)
 }
}