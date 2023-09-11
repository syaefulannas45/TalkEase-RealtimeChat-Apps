import {configureStore} from '@reduxjs/toolkit';
import toggleReducer from './Toggle';
import authReducer from './Auth/authSlice';
import chatReducer from './Chat/ChatSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth: authReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
