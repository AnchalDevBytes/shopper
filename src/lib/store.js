import { configureStore } from "@reduxjs/toolkit"
import productReducer from "@/lib/features/ProductSlice"
import homeCategoryReducer from "./features/homeCategorySlice"
import filterReducer from "./features/filterSlice"


export const store = configureStore({
    reducer:{
        product:productReducer,
        homeCategory : homeCategoryReducer,
        filter : filterReducer
    }
})