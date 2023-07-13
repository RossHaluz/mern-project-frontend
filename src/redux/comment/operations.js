import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// http://localhost:3005
//https://blog-t4w3.onrender.com

axios.defaults.baseURL = 'https://blog-t4w3.onrender.com'

export const createNewComment = createAsyncThunk('api/createNewComment', async (params, {rejectWithValue}) => {
   const {id, comment} = params;
    try {
        const {data} = await axios.post(`/api/comments/${id}`, {comment});
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getAllComments = createAsyncThunk('api/comments', async (id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/comments/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
