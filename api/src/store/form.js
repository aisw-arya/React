import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postFormData } from "../api/formData";


const initialState={
    status:"idle",
    data :[]
} 


export const postForm = createAsyncThunk(
    "cartsetter",
    async(data)=>{
        const response = await postFormData(data)
        return response;
    }
)

export const PostFormSlice = createSlice({
    name:"postData",
    initialState:initialState,
    reducer:{},
    extraReducers(builder){
        builder
        .addCase(postForm.pending, (state) => {
            state.status = "pending";
          })
          .addCase(postForm.fulfilled, (state) => {
            state.status = "succeeded";
          })
          .addCase(postForm.rejected, (state) => {
            state.status = "failed";
          });
    }
})

export default PostFormSlice.reducer