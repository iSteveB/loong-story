import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from './feature/userIdSlices';
import userReducer from './feature/userSlices';

export default configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer
    },
});
