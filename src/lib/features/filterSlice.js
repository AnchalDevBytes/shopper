import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: true,
  error: null,
  filters: {
    brand: null,
    price: { min: null, max: null },
    rating: null,
    category : null
  },
};

export const fetchAllProducts = createAsyncThunk(
  "filters/fetchAllProducts",
  async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    return data?.products;
  }
);

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { filterType, filterValue } = action.payload;

      switch (filterType) {
        case "price": {
          const newFilter = { ...state.filters, price : filterValue};
          const {brand, category, rating} = newFilter;
          if (filterValue.min === 0 && filterValue.max === 2000) {
            state.filteredProducts = state.products.filter((product) => {
              const passesBrandFilter = !brand || product.brand === brand;
              const passesRatingFilter = !rating || product.rating >= rating;
              const passesCategoryFilter = !category || product.category === category;
              return passesBrandFilter && passesRatingFilter && passesCategoryFilter;
            });
            break;
          }
          state.filters = newFilter;
          state.filteredProducts = state.filteredProducts.filter(
            (product) =>
              product.price >= filterValue.min &&
              product.price <= filterValue.max
          );
          break;
        };

        case "brand": {
          const newFilter = { ...state.filters, brand : filterValue};
          const { rating, category, price} = newFilter;
          if (filterValue === "all brands") {
            // Preserve other filters and reset only the brand filter
            state.filteredProducts = state.products.filter((product) => {
              const passesPriceFilter =
                (!price.min || product.price >= price.min) &&
                (!price.max || product.price <= price.max);
              const passesRatingFilter = !rating || product.rating >= rating;
              const passesCategoryFilter = !category || product.category === category;
              return passesPriceFilter && passesRatingFilter && passesCategoryFilter;
            });
            break;
          }
          state.filters = newFilter;
          state.filteredProducts = state.filteredProducts.filter(
            (product) => product.brand === filterValue
          );
          break;
        };

        case "rating": {
          const newFilter = { ...state.filters, rating : filterValue};
          const {price, category, brand} = newFilter;
          if (filterValue === 0) {
            state.filteredProducts = state.products.filter((product) => {
              const passesBrandFilter = !brand || product.brand === brand;
              const passesPriceFilter =
                (!price.min || product.price >= price.min) &&
                (!price.max || product.price <= price.max);
              const passesCategoryFilter = !category || product.category === category;
              return passesBrandFilter && passesPriceFilter && passesCategoryFilter;
            });
            break;
          }
          state.filters = newFilter;
          state.filteredProducts = state.filteredProducts.filter(
            (product) => product.rating >= filterValue
          );
          break;
        };
        
        case "category" : {
          const newFilter = { ...state.filters, category : filterValue};
          const {price, brand, rating} = newFilter;
          if (filterValue === "all categories") {
            // Preserve other filters and reset only the brand filter
            state.filteredProducts = state.products.filter((product) => {
              const passesPriceFilter =
                (!price.min || product.price >= price.min) &&
                (!price.max || product.price <= price.max);
              const passesRatingFilter = !rating || product.rating >= rating;
              const passesBrandFilter = !brand || product.brand === brand;
              return passesPriceFilter && passesRatingFilter && passesBrandFilter;
            });
            break;
          }
          state.filters = newFilter;
          state.filteredProducts = state.filteredProducts.filter(
            (product) => product.category === filterValue
          );
          break;
        };

        default:
          state.filteredProducts = state.products;
      }
    },

    clearFilters: (state) => {
      state.filteredProducts = state.products;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload; // Initialize filtered products with all products
        state.loading = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterProducts, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
