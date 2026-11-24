import {url,ends,options} from "../Constant/constant"
export const getEndPoint=(path)=>{
const endpath=path.includes("/")?path.split("/"):path
var baseurl;
if(typeof endpath==="string"){
    baseurl=`${url}${ends[endpath]}`
}
else{
    baseurl=`${url}/${ends[endpath[0]]}/${endpath[1]}`
}
return baseurl
}
export const getOption=(method,body={})=>{
    const option={
        ...options,
        method:method.toUpperCase()
    }
    if(method.toLowerCase()==="post"||method.toLowerCase()==="put"||method.toLowerCase()==="patch"){
        option.body=JSON.stringify(body)
    }
    return option
}