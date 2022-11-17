import { createSlice } from "@reduxjs/toolkit";

export const postsSlices = createSlice({
    name : 'posts',
    initialState: {
        posts: null
    },
    reducers: {
        getPosts: (state, {payload}) => {
            state.posts = payload
        }
    }
});

export const { getPosts } = postsSlices.actions;
export default postsSlices.reducer;