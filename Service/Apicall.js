import { getEndpoint,getOption } from "./CreatingEndPoint"
export const fetchApiCall= async (path,method,body={})=>{
try{
   const endpoint=getEndpoint(path)
   const options=getOption(method,body)
   const response= await fetch(endpoint,options)
   const responseData=await response.json()
   return responseData
}
catch(error){
  console.log("Error::::>",error)
}
}