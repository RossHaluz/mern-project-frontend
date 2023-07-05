import { createSlice } from "@reduxjs/toolkit";
import { createPost, getAllPosts, getPost, getUserPosts, delateUserPost, updatePost, setFavoritePost } from "./operatins";

const initialState = {
    posts: [],
    post: null,
    favoritePosts: [],
    popularePosts: [],
    loading: false
}

const postSlice = createSlice({
name: 'post',
initialState,
reducers: {},
extraReducers: {
    [createPost.pending](state){
        state.loading = true;
    },
    [createPost.fulfilled](state, action){
        state.loading = false;
        state.posts = [action.payload, ...state.posts]
    },
    [createPost.rejected](state){},
    [getAllPosts.pending](state, action){
        state.loading = true;
    },
    [getAllPosts.fulfilled](state, action){
        state.loading = false;
        state.posts = action.payload.posts;
        state.popularePosts = action.payload.popularPosts;
    },
    [getAllPosts.rejected](state, action){},
    [getPost.pending](state, action){
        state.loading = true;
    },
    [getPost.fulfilled](state, action){
        state.loading = false;
        state.post = action.payload;
    },
    [getPost.rejected](state, action){},
    [getUserPosts.pending](state, action){
        state.loading = true
    },
    [getUserPosts.fulfilled](state, action){
      state.posts = action.payload
    },
    [getUserPosts.rejected](state, action){},
    [delateUserPost.pending](state, action){
        state.loading = true
    },
    [delateUserPost.fulfilled](state, action){
        state.posts = state.posts?.filter(post => post?._id !== action.payload?._id)
        state.loading = false
    },
    [delateUserPost.rejected](state, action){},
    [updatePost.pending](state, action){
        state.loading = true;
    },
    [updatePost.fulfilled](state, action){
        state.loading = false;
        const postIndex = state.posts.findIndex(item => item._id === action.payload._id)
        state.posts[postIndex] = action.payload
    },
    [updatePost.rejected](state, action){
        console.log(action.payload);
    },
    [setFavoritePost.pending](state, action){
        state.loading = true;
    },
    [setFavoritePost.fulfilled](state, action){
        state.loading = false

    }
}
})

export const postReducer = postSlice.reducer;