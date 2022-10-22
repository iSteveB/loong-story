import { createSlice } from '@reduxjs/toolkit';

export const picturesSlices = createSlice({
    name: 'picture',
    initialState: {
        picture: null,
    },
    reducers: {
        uploadPicture: (state, { payload }) => {
            state.picture = payload;
        },
    },
});

export const { uploadPicture } = picturesSlices.actions;
export default picturesSlices.reducer;
