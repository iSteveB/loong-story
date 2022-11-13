import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from './features/userIdSlices';
import userReducer from './features/userSlices';
import usersReducer from './features/usersSlices';

export default configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        users: usersReducer,
    },
});
