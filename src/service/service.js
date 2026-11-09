import { BaseUrl, url,option } from "../constant/constant";
export const getEndPoint = (pathname) => {
  let path = pathname;
  const endPoint = `${BaseUrl}${url[path]}`;
  return endPoint
};

export const getOption=(Method)=>{
 option.Method=Method
 option.body=JSON.stringify(body)
 return option
}
