import { createSlice } from '@reduxjs/toolkit';

export const trendsSlices = createSlice({
    name: 'trends',
    initialState: {
        trends: null,
    },
    reducers: {
        getTrends: (state, { payload }) => {
            state.trends = payload
        },
    },
});

export const { getTrends } = trendsSlices.actions;
export default trendsSlices.reducer;
