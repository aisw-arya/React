import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import productDataReducer from "./product"; 
import outletDataReducer from "./outlet";
import  postFormReducer from "./form";



export const store = configureStore({
    reducer:{
        counter:counterReducer,
        productData: productDataReducer,
        outletData:outletDataReducer,
        formData:postFormReducer
    },
});


