import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from './features/userIdSlices';
import userReducer from './features/userSlices';
import pictureReducer from './features/picturesSlices';

export default configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        picture: pictureReducer,
    },
});
