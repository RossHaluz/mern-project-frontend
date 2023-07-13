import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// http://localhost:3005
//https://blog-t4w3.onrender.com


axios.defaults.baseURL = 'http://localhost:3005'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
} 

const removeAuthHeader = () => {
axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk('auth/register', async(userData, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/auth/register', userData)
        setAuthHeader(data.newUser.token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (userData, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/auth/login', userData)
        setAuthHeader(data.user.token)
        return data;
    } catch (error) {
       return rejectWithValue(error.message)
    }
})

export const getCurrentUser = createAsyncThunk('auth/current-user', async (__, {rejectWithValue, getState}) => {
    const state = getState().auth
    const token = state.token;
    if(!token){
        return rejectWithValue()
    }
    setAuthHeader(token);
    try {
        const {data} = await axios.get('/api/auth/current-user')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async(__, {rejectWithValue}) => {
    try {
       const {data} = await axios.post('/api/auth/logout')
        removeAuthHeader()
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})