import { configureStore } from "@reduxjs/toolkit"
import productReducer from "@/lib/features/ProductSlice"


export const store = configureStore({
    reducer:{
        product:productReducer,
    }
})