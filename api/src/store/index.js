import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import productDataReducer from "./product"; 



export const store = configureStore({
    reducer:{
        counter:counterReducer,
        productData: productDataReducer
    },
});


