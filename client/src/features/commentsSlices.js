import { createSlice } from '@reduxjs/toolkit';

export const commentsSlices = createSlice({
    name: 'comments',
    initialState: {
        comments: null,
    },
    reducers: {
        addComments: (state, { payload }) => {
            state.comments = payload
        },
    },
});

export const { addComments } = commentsSlices.actions;
export default commentsSlices.reducer;
