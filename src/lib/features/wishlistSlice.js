import { createSlice } from "@reduxjs/toolkit";

export const loadWishlistFromLocalStorage = () => {
    try {
        const storedWishlist = localStorage.getItem("wishlist");
        return storedWishlist ? JSON.parse(storedWishlist) : []
    } catch (error) {
        console.error("Error while loading wishes from localStorage" +error);
        return [];
    }
}

export const saveWishlistToLocalStorage = (wishlist) => {
    try {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    } catch (error) {
        console.error("Error while saving wishes to localStorage" +error);
        throw error;
    }
}

export const wishlistSlice = createSlice({
    name:"wishlist",
    initialState: loadWishlistFromLocalStorage(),
    reducers:{
        addWishes: (state, action) => {
            const newState = [...state, action.payload];
            saveWishlistToLocalStorage(newState)
            return newState;
        },
        removeWishes: (state, action) => {
            const newState = state.filter((product) => product.id !== action.payload);
            saveWishlistToLocalStorage(newState)
            return newState;
        }
    }
})

export const {addWishes, removeWishes} = wishlistSlice.actions;

export default wishlistSlice.reducer;