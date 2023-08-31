import {configureStore} from '@reduxjs/toolkit';
import toggleReducer from './Toggle';
import authReducer from './Auth/authSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
