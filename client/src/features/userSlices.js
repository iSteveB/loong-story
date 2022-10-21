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
    },
});

export const { getUser } = userSlices.actions;
export default userSlices.reducer;
