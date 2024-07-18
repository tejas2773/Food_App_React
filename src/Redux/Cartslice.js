import { createSlice } from "@reduxjs/toolkit";


// creating schema of cartslice
const cartslice=createSlice({ 
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        add:(state,action)=>{
            state.items.push(action.payload)
        },
        remove:(state,action)=>{
            state.items = state.items.filter((item) => item.card.info.id !== action.payload);
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
    },
})

export const {add,remove,clearCart} =cartslice.actions;
export default cartslice.reducer;