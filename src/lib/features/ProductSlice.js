const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    categories:[],
    brands : [],
}

const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers : {
        getCategories : (state, action) => {
            const allProducts = action.payload;
            const uniqueCategories = ["all categories",...new Set(allProducts?.map(obj => obj.category))];
            if(uniqueCategories) {
                state.categories = uniqueCategories;
            }
        },
        getBrands : (state, action) => {
            const allProducts = action.payload;
            const uniqueBrands = ["all brands",...new Set(allProducts?.map(obj => obj.brand))];
            if(uniqueBrands) {
                state.brands = uniqueBrands;
            }
        }
    }
})

export default ProductSlice.reducer;
export const {getBrands, getCategories} = ProductSlice.actions;