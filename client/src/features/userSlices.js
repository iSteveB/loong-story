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
        },
        followUser: (state, {payload}) => {
            state.user.following.push(payload)
        },
        unfollowUser: (state, {payload}) => {
            state.user.following = state.user.following.filter(id => id !== payload) 
        }
    },
});

export const { getUser, uploadPicture, updateBio, followUser, unfollowUser } = userSlices.actions;
export default userSlices.reducer;
