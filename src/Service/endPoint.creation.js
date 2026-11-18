import {BASEURL,URL,OPTIONS} from "../Constant/service.constant"
export const getEndpoint=(path)=>{
    const pathname=path.includes("/")?path.split("/"):path
    let endpoint;
    if(typeof pathname==="string"){
       endpoint=`${BASEURL}/${URL[pathname]}`
       console.log(endpoint);
    }
    else{
        endpoint=`${BASEURL}${URL[pathname[0]]}/${pathname[1]}`
        console.log(endpoint)
    }    
    return endpoint
}

export const getOption=(Method,body={})=>{
    const options={
        ...OPTIONS,
        method:Method.toUpperCase()
    }
    if(Method==="put"||Method==="post"||Method==="patch"){
     options.body=JSON.stringify(body)
     
    }
    return options
}
