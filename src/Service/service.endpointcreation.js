import {baseurl,endurl,option} from "../Constant/constant"
export const getEndpoint=(path)=>{
 const endpoint=path.includes("/")?path.split("/"):path
 if(endpoint!=null){
        var finalpath=`${baseurl}${endurl[endpoint[0]]}/${endpoint[1]}`
        return finalpath
 }
}

export const getOption=(method,body)=>{
    if(method.toLowerCase()==="get" || method.toLowerCase()==="delete"){
        const options={
            ...option,
            method:method.toUpperCase()  
        }
        return options
    }

    else if((method.toLowerCase()==="put" || method.toLowerCase()==="post") && body!=null){
        const options={
            ...option,
            method:method.toUpperCase() , 
            body:JSON.stringify(body)
        }
        return options
    }

    
}