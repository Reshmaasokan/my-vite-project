import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/Counter-1/Counter.slice"
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})