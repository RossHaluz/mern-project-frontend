import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// http://localhost:3005
//https://blog-t4w3.onrender.com

axios.defaults.baseURL = 'https://blog-t4w3.onrender.com'

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
    console.log(error);
    return rejectWithValue(error.message)
}
})

export const removeFromFavorite = createAsyncThunk('api/removeFromFavorite', async(postId, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/api/posts/favorite-remove/${postId}`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getFavoritePosts = createAsyncThunk('api/getFavoritePosts', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/posts/favorite')
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const getCategoryPosts = createAsyncThunk('api/getCategoryPosts', async(category, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/posts/category/${category}`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
    })

    export const getSearchCategory = createAsyncThunk('api/getSearchCategory', async (params, {rejectWithValue}) => {
        const {category, searchName} = params;
        try {
            const {data} = await axios.get(`/api/posts/category-search/${category}?query=${searchName}`);
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

    export const getSearchPosts = createAsyncThunk('api/getSearchPosts', async(query, {rejectWithValue}) => {
        try {
            const {data} = await axios.get(`/api/posts/search-posts?query=${query}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })