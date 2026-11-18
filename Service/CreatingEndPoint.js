import { URL,BaseURL,OPTIONS } from "../Constant/constant";

export const getEndpoint=(path)=>{

    const pathend=path.includes("/")?path.split("/"):path

    let endPointURL;

    if(typeof pathend ==="string"){
        endPointURL=`${BaseURL}${URL[pathend]}`
    }
    else{
        endPointURL=`${BaseURL}${URL[pathend[0]]}/${pathend[1]}`
    }
    return endPointURL
}

export const getOption=(Method,body={})=>{
       const option={
        ...OPTIONS,
        method:Method.toUpperCase()
        }
    if(Method==="get"||Method==="post"||Method==="put"){
        option.body=JSON.stringify(body)
    }
    return option
    

}