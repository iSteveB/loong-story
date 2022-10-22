import { createSlice } from '@reduxjs/toolkit';

export const userIdSlices = createSlice({
    name: 'userId',
    initialState: {
        userId: null,
    },
    reducers: {
        getUserId: (state, { payload }) => {
            state.userId = payload;
        },
        deleteUserId: (state, { payload }) => {
            state.userId = null
        },
    },
});

export const { getUserId, deleteUserId } = userIdSlices.actions;
export default userIdSlices.reducer;
