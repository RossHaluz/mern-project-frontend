import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3005'

export const createPost = createAsyncThunk('post/createPost', async (params, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/posts', params);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getAllPosts = createAsyncThunk('api/getAllPosts', async (__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/posts');
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getPost = createAsyncThunk('api/getPost', async (postId, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/posts/${postId}`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getUserPosts = createAsyncThunk('api/getUserPosts', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/posts/user/posts')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const delateUserPost = createAsyncThunk('api/delateUserPost', async (id, {rejectWithValue}) => {
    try {
        const {data} = axios.delete(`/api/posts/${id}`);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updatePost = createAsyncThunk('api/updatePost', async (params, {rejectWithValue}) => {
    const {id, postData} = params;
    try {
        const {data} = await axios.put(`/api/posts/${id}`, postData);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const setFavoritePost = createAsyncThunk('api/setFevoritePosts', async (postId, {rejectWithValue}) => {
try {
    const {data} = await axios.post(`/api/posts/favorite/${postId}`)
    return data
} catch (error) {
    return rejectWithValue(error.message)
}
})