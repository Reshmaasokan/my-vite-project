import {BASEURL,URL,OPTIONS} from "../Constant/service.constant"
export const getEndpoint=(path)=>{
    const pathname=path.includes("/")?path.split("/"):path
    
    if(typeof pathname==="string"){
       const endpoint=`${BASEURL}/${URL[pathname]}`
       console.log(endpoint);
    }
    else{
        const endpoint=`${URL}/${pathname[0]}/${pathname[1]}`
        console.log(endpoint)
    }    
    return endpoint
}

export const getOption=(Method,body={})=>{
    OPTIONS.method=Method;
    if(Method==="get"||Method==="put"||Method==="post"||Method==="patch"){
     OPTIONS.body=JSON.stringify(body)
     return OPTIONS
    }
}
