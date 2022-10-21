import { createSlice } from "@reduxjs/toolkit";

export const postsSlices = createSlice({
    name : 'posts',
    initialState: {
        posts: null
    },
    reducers: {

    }
});

export const {} = postsSlices.actions;
export default postsSlices.reducer;