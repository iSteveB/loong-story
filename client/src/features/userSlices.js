import { createSlice } from '@reduxjs/toolkit';

export const userSlices = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        getUser: (state, { payload }) => {
            state.user = payload;
        },
        uploadPicture: (state, { payload }) => {
            state.user.picture = payload;
        }
    },
});

export const { getUser, uploadPicture } = userSlices.actions;
export default userSlices.reducer;
