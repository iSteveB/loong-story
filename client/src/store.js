import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from './features/userIdSlices';
import userReducer from './features/userSlices';
import usersReducer from './features/usersSlices';
import postsReducer from './features/postsSlices';
import trendsReducer from './features/trendsSlices'

export default configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        users: usersReducer,
        posts: postsReducer,
        trends: trendsReducer
    },
});
