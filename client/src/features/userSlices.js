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
        },
        updateBio: (state, { payload }) => {
            state.user.bio = payload
        }
    },
});

export const { getUser, uploadPicture, updateBio } = userSlices.actions;
export default userSlices.reducer;
