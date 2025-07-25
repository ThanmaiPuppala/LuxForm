import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishlist(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id)
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    image:newItem.image,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                })
            }
        },
        removeFromWishlist(state,action){
            const id=action.payload;
            const existingItem=state.items.find(item=>item.id===id);
            if(existingItem){
                state.items=state.items.filter(item=>item.id!=id);
            }
        }
    }
})
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;