import { createSlice } from "@reduxjs/toolkit";

export const usersSlices = createSlice({
    name : 'userId',
    initialState: {
        userId: null
    },
    reducers: {
        getUserId: (state, {payload}) => {
            state.userId = payload
        },
        deleteUserId: (state, {payload})=>{ 
            state.userId = state.userId.filter(userId => userId.id !== payload)
        }
    }
});

export const { getUserId, deleteUserId } = usersSlices.actions;
export default usersSlices.reducer;