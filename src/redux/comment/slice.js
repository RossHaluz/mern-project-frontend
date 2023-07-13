import { createSlice } from "@reduxjs/toolkit";
import { createNewComment, getAllComments } from "./operations";

const initialState = {
    loading: false,
    comments: []
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers:{},
    extraReducers:{
        [createNewComment.pending](state){
            state.loading = true;
        },
        [createNewComment.fulfilled](state, action){
            state.loading = false;
            state.comments.push(action.payload);
        },
        [getAllComments.pending](state){
            state.loading = true;
        },
        [getAllComments.fulfilled](state, action){
            state.loading = false;
            state.comments = action.payload;
        }
    }
})

export const commentReducer = commentSlice.reducer;