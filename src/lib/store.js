import { configureStore } from "@reduxjs/toolkit"
import productReducer from "@/lib/features/ProductSlice"
import homeCategoryReducer from "./features/homeCategorySlice"


export const store = configureStore({
    reducer:{
        product:productReducer,
        homeCategory : homeCategoryReducer
    }
})