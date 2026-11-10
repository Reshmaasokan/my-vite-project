import { BaseUrl, url,option } from "../constant/constant";

export const getEndPoint = (pathname) => {

  let path = pathname.includes('/') ? pathname.split('/') : pathname;

  let endPoint;

  if(typeof path==="string"){
      endPoint = `${BaseUrl}${url[path]}`;
  }
  else{
      endPoint=`${BaseUrl}/${url[path[0]]}/${path[1].trim()}`
  }
  return endPoint

}

export const getOption = (Method, body={},controller) => {

  option.method = Method;
  if (Method === "post" || Method === "put" || Method === "patch" && body!={}) {
    option.body = JSON.stringify(body);
  }

  if(controller !=undefined){
    option.signal=controller.signal
  }
  return option

}
