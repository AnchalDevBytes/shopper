import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : true,
    smartphones : [],
    groceries : [],
    jwelleries : []
}

export const getHomeCategoryProducts = createAsyncThunk('getHomeCategoryProducts', async (category = "tops") => {
    try {
        const {data} = await axios.get(`https://dummyjson.com/products/category/${category}`);
        return {data:data.products, category:category}
    } catch (error) {
        console.error("HomeCategory ka data mei error aya", error);
    }
})

const homeCategorySlice = createSlice({
    name : 'homeCategory',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getHomeCategoryProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getHomeCategoryProducts.fulfilled, (state, action) => {
            const {data, category} = action.payload;
            if(category === 'smartphones'){
                state.smartphones = data;
                state.isLoading = false;
            }
            if(category === 'groceries'){
                state.groceries = data;
                state.isLoading = false;
            }
            if(category === 'womens-jewellery'){
                state.jwelleries = data;
                state.isLoading = false;
            }
        })
        builder.addCase(getHomeCategoryProducts.rejected, (state) => {
            state.smartphones = [];
            state.groceries = [];
            state.jwelleries = [];
            state.isLoading = false;
        })
    }
})

export default homeCategorySlice.reducer;