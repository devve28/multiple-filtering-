import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [], 
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
   
    CLEAR_FILTERS(state, action) {
      state.filteredProducts = action.payload; 
    },
  },
});


export const { CLEAR_FILTERS } = filterSlice.actions;




export default filterSlice.reducer;
