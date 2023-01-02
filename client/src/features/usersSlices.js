import { createSlice } from '@reduxjs/toolkit';

export const usersSlices = createSlice({
    name: 'users',
    initialState: {
        users: null,
    },
    reducers: {
        getUsers: (state, { payload }) => {
            state.users = payload;
        },
    },
});

export const { getUsers } = usersSlices.actions;
export default usersSlices.reducer;
