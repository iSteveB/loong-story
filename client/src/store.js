import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from './features/userIdSlices';
import userReducer from './features/userSlices';

export default configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
    },
});
