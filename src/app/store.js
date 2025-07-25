import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cartSlice'
import wishlistSlice from "../features/wishlistSlice";
const store=configureStore({
    reducer:{
        cart:cartReducer,
        wishlist:wishlistSlice
    }
})
export default store;