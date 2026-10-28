
const baseUrl="https://fakestoreapi.com"
export const postApicall =async (payload)=>{
    try{
        const url=baseUrl + "/users"
        const option={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    }
    const response=await fetch(url,option)
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    const responseDta=await response.json()
    return responseDta
    }
    catch(error){
        console.log("error==>",error)
    }
}