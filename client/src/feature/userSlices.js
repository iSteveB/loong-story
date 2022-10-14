import { createSlice } from '@reduxjs/toolkit';

export const usersSlices = createSlice({
    name: 'users',
    initialState: {
        users: null,
    },
    reducers: {
        getUsers: (state, { payload }) => {
            state.userId = payload;
        },
    },
});

export const { getUsers, deleteUsers } = usersSlices.actions;
export default usersSlices.reducer;
