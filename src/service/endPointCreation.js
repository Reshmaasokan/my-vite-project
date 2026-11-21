import {lastpath,options,url} from "../constant/endPoint"
 export const getEndpoint=(path)=>{

    const endpoint=path.includes("/")?path.split("/"):path

    const endpointurl=`${url}${lastpath[endpoint[0]]}/${endpoint[1]}`

    return endpointurl

 }

 export const getOptions=(method,body)=>{
    const option={
        ...options,
        method:method.toUpperCase()
    }
    if(method==="put"|| method==="post"||method==="patch"&& body!={}){
        option.body=JSON.stringify(body)
    }
    return option
 }
