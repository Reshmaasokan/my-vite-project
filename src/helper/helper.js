export const loginstatus=()=>{
    const token=localStorage.getItem("token")
    return token?true:false
}