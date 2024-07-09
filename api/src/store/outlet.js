
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchProducts} from '../api/outletData'

const initialState = {
  status: "idle",
  data: [],
};

export const getProductData = createAsyncThunk(
  "outletData/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProductData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productDataSlice.reducer;
