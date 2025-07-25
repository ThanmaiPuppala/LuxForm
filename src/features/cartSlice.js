import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id)
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice+=newItem.price;
            }
            else{
                state.items.push({
                    id:newItem.id,
                    image:newItem.image,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                })
            }
            state.totalQuantity+=1;
            state.totalAmount+=newItem.price;
        },
        removeFromCart(state,action){
            const id=action.payload;
            const existingItem=state.items.find(item=>item.id===id);
            if(existingItem){
                state.totalQuantity -=existingItem.quantity
                state.totalAmount -=existingItem.totalPrice
                state.items=state.items.filter(item=>item.id!=id);
            }
        },
        increaseQuantity(state,action){
            const id=action.payload;
            const existingItem=state.items.find(item=>item.id===id);
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice+=existingItem.price;
                state.totalQuantity+=1;
                state.totalAmount += existingItem.price;
            }
        },
        decreaseQuantity(state,action){
           const id=action.payload;
           const existingItem=state.items.find(item=>item.id===id);
           if(existingItem && existingItem.quantity >1){
            existingItem.quantity-=1;
            existingItem.totalPrice-=existingItem.price;
            state.totalQuantity-=1;
            state.totalAmount-=existingItem.price
           } else if(existingItem && existingItem.quantity ===1){
            state.items=state.items.filter(item=>item.id !==id);
            state.totalQuantity -= 1;
            state.totalAmount -= existingItem.price;
           }
        }
    }
})
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions;
export default cartSlice.reducer;