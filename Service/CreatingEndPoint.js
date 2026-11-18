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

export const options=(Method,body={})=>{
    if(Method.toLowecase()==="get"||Method.toLowecase()==="post"||Method.toLowecase()==="put"){
        const option={
        ...OPTIONS,
        method:Method,
        body:JSON.stringify(body)
    }
    return option
    }

}