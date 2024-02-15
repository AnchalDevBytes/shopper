import { configureStore } from "@reduxjs/toolkit"
import productReducer from "@/lib/features/ProductSlice"
import homeCategoryReducer from "./features/homeCategorySlice"
import filterReducer from "./features/filterSlice"
import cartReducer from "./features/cartSlice"

export const store = configureStore({
    reducer:{
        product:productReducer,
        homeCategory : homeCategoryReducer,
        filter : filterReducer,
        cart: cartReducer,
    }
})