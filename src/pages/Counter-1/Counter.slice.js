import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"count",
    initialState:{
        count:12
    },
    reducers:{
        add:(state,action)=>{
            state.count+=1
        },
        sub:(state,action)=>{
            state.count-=1
        },
        mul:(state,action)=>{
            state.count*=2
        },
        div:(state,action)=>{
            state.count/=2
        },
    }
})

export const {add,sub,mul,div}=counterSlice.actions
export default counterSlice.reducer