import { configureStore } from "@reduxjs/toolkit"
import productReducer from "@/lib/features/ProductSlice"
import homeCategoryReducer from "./features/homeCategorySlice"
import filterReducer from "./features/filterSlice"
import cartReducer from "./features/cartSlice"
import authReducer from "./features/authSlice"
import wishlistReducer, { loadWishlistFromLocalStorage, saveWishlistToLocalStorage } from "./features/wishlistSlice"


const preloadedState = {
    list : loadWishlistFromLocalStorage()
};

export const store = configureStore({
    reducer:{
        product:productReducer,
        homeCategory : homeCategoryReducer,
        filter : filterReducer,
        cart: cartReducer,
        auth: authReducer,
        list:wishlistReducer,
    },
    preloadedState
})

// update bookmark in localstorage when state get changed
store.subscribe(() => {
    const state = store.getState();
    saveWishlistToLocalStorage(state.list)
})