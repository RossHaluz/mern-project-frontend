import { createSlice } from "@reduxjs/toolkit";
import { createPost, getAllPosts, getPost, getUserPosts, delateUserPost, updatePost, setFavoritePost, removeFromFavorite, getFavoritePosts, getCategoryPosts, getSearchCategory, getSearchPosts } from "./operatins";

const initialState = {
    posts: [],
    currentPage: null,
    totalPages: null,
    totalPosts: null,
    limit: null,
    post: null,
    favoritePosts: [],
    popularePosts: [],
    loading: false
}

const postSlice = createSlice({
name: 'post',
initialState,
reducers: {
    changeCurrentPage(state, action) {
        console.log(action.payload);
        state.currentPage = action.payload;
    }
},
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
        state.currentPage = action.payload.meta?.page;
        state.popularePosts = action.payload.popularPosts;
        state.totalPages = action.payload.meta?.totalPages;
        state.limit = action.payload.meta?.limit;
        state.totalPosts = action.payload.meta?.totalPosts;
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
        state.favoritePosts = [...state.favoritePosts, action.payload]

    },
    [removeFromFavorite.pending](state, action){
        state.loading = true
    },
    [removeFromFavorite.fulfilled](state, action){
        state.loading = false;
        state.favoritePosts = state.favoritePosts.filter(item => item._id !== action.payload._id)
    },
    [getFavoritePosts.pending](state, action){
        state.loading = true;
    },
    [getFavoritePosts.fulfilled](state, action){
        state.loading = false;
        state.favoritePosts = action.payload.posts;
    },
    [getFavoritePosts.rejected](state, action){
        console.log(action.payload);
    },
    [getCategoryPosts.pending](state, action){
        state.loading = true;
    },
    [getCategoryPosts.fulfilled](state, action){
        state.loading = false;
        state.posts = action.payload.posts;
    },
    [getSearchCategory.pending](state, action){
        state.loading = true;
    },
    [getSearchCategory.fulfilled](state, action){
        state.loading = false;
        state.posts = action.payload;
    },
    [getSearchPosts.pending](state, action){
        state.loading = true;
    },
    [getSearchPosts.fulfilled](state, action){
        console.log(action.payload.length);
        state.loading = false;
        state.posts = action.payload;
        state.totalPosts = action.payload.length;
    }
}
})

export const {changeCurrentPage} = postSlice.actions;

export const postReducer = postSlice.reducer;