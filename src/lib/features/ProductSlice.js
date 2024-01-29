import axios from "axios";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
    loader:true,
    allProducts:[],
    categoriesProductLoader:true,
    categoriesProduct:[],
    categoriesLoader:true,
    categories:[],
}

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/products?limit=100`);
        return  response.data
    } catch (error) {
        console.error("Error in fetching allProducts : " +error);
        throw error
    }
})

export const getCategoriesProduct = createAsyncThunk("getCategoriesProduct", async (category="tops") => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        return response.data
    } catch (error) {
        console.error("Error in fetching categories product: " +error);
        throw error
    }
})

export const getCategories = createAsyncThunk("getCategories", async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/categories`)
        return response.data
    } catch (error) {
        console.error("Error in fetching categories: " +error);
        throw error
    }
})

const ProductSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder) => {
        //allProduct
        builder.addCase(getAllProducts.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.loader = false;
        })
        builder.addCase(getAllProducts.rejected, (state) => {
            state.loader = false;
            console.log("Error in fetching allProduct data");
        })

        //category product
        builder.addCase(getCategoriesProduct.pending, (state) => {
            state.categoriesProductLoader = true;
        })
        builder.addCase(getCategoriesProduct.fulfilled, (state, action) => {
            state.categoriesProduct = action.payload;
            state.categoriesProductLoader = false;
        })
        builder.addCase(getCategoriesProduct.rejected, (state) => {
            state.categoriesProductLoader = false;
            console.error("Error in fetching categories product");
        })

        //categories
        builder.addCase(getCategories.pending, (state) => {
            state.categoriesLoader = true;
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categoriesLoader = false;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.categoriesLoader = false;
            console.error("Error in frtching categories");
        })
    }
})

export default ProductSlice.reducer;