
import { createSlice } from "@reduxjs/toolkit";
import { generateCards } from './generateCardsFile'; 

const initialState = {
  products: [],
  generatedCards: [], 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      state.products = action.payload.products;
    },
    GENERATE_PRODUCTS(state, action) {
      const { count, sortType } = action.payload;
      state.generatedCards = generateCards(count, sortType);
    },
  },
});

export const { STORE_PRODUCTS, GENERATE_PRODUCTS } = productSlice.actions;


export const selectProducts = (state) => state.product.products;
export const selectGeneratedCards = (state) => state.product.generatedCards;

export default productSlice.reducer;
