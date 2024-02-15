const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    productCart:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.productCart.find((item) => item.id === newItem.id)
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.productCart.push({...newItem, quantity:1})
            }
        }, 
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.productCart = state.productCart.filter((item) => item.id !== itemId)
        }, 
        increment: (state, action) => {
            const itemId = action.payload;
            const selectedProduct = state.productCart.find((item) => item.id === itemId)
            if(selectedProduct) {
                selectedProduct.quantity += 1;
            }
        }, 
        decrement: (state, action) => {
            const itemId = action.payload;
            const selectedProduct = state.productCart.find((item) => item.id === itemId)
            if(selectedProduct && selectedProduct.quantity > 1){
                selectedProduct.quantity -= 1;
            }
        }, 
        clearCart: (state) => {
            state.productCart = [];
        },
    }
})

export const {addToCart, removeFromCart, increment, decrement, clearCart} = cartSlice.actions;
export default cartSlice.reducer;