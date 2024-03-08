import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
      id: 1,
      value: 7,
   },
   {
      id: 2,
      value: 8,
   }
]

const counterSlice = createSlice({
   name: 'counter', 
   initialState,
   reducers: {
      increment: (state, action) => {
         const counterIndex = state.findIndex((c) =>{
          return c.id === action.payload;
         })

         state[counterIndex].value++;
      },
      decrement: (state, action) => {
         const counterIndex = state.findIndex((c) =>{
           return c.id === action.payload;
         })

         state[counterIndex].value--;
      },
   }
})

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;