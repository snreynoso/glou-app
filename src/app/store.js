import { configureStore } from '@reduxjs/toolkit';

// Reducers
import userReducer from '../reducers/user/userSlice';

export default configureStore({
  reducer: {
    user: userReducer
  }
})