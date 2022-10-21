import { createSlice } from '@reduxjs/toolkit';

export const picturesSlices = createSlice({
    name: 'pictures',
    initialState: {
        pictures: null,
    },
    reducers: {
        uploadPicture: (state, { payload }) => {
            state.pictures.push(payload);
        },
    },
});

export const { uploadPicture } = picturesSlices.actions;
export default picturesSlices.reducer;
