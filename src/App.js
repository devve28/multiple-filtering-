import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import productReducer from "./utils/productSlice.js";
import filterReducer from "./utils/productSlice.js";
import Product from "./components/product/Product";
import "./App.scss";


const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
