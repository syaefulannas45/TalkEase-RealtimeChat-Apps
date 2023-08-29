import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from './Loading';
import authReducer from './Auth/sliceAuth';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
