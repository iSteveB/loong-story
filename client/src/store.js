import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from './feature/userIdSlices';

export default configureStore({
    reducer: {
        userId: userIdReducer,
    },
});
