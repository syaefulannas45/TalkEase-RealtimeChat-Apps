import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {
  db,
  createUserWithEmailAndPassword as createUserWithEmail,
  auth,
  ref as databaseRef,
  set as setDatabaseValue,
  push,
} from '../../config';
import {getData, showError, storeData} from '../../utils';
import {RootState} from '../store';

export interface UserProfile {
  fullName: string;
  email: string;
  password: string;
  uid?: string;
}

interface AuthState {
  creatingUser: boolean;
  creatingUserError: string | null;
  isLoggedIn: boolean;
  user: UserProfile | null;
}
type CreateUserThunkPayload = {
  form: UserProfile;
  navigation: any;
};

const initialState: AuthState = {
  creatingUser: false,
  creatingUserError: null,
  isLoggedIn: false,
  user: null,
};

export const createUserAndSaveData = createAsyncThunk<
  void,
  CreateUserThunkPayload
>('auth/createUserAndSaveData', async ({form, navigation}) => {
  try {
    const userCredential = await createUserWithEmail(
      auth,
      form.email,
      form.password,
    );
    const userDatabaseRef = databaseRef(db, `users/${userCredential.user.uid}`);

    const newUser = {
      fullName: form.fullName,
      email: form.email,
      uid: userCredential.user.uid,
    };
    await setDatabaseValue(userDatabaseRef, newUser);

    await storeData('user', newUser);

    navigation.navigate('UploadPhoto', newUser);
  } catch (error: any) {
    showError(error.message);
  }
});
export const checkAsyncStorageAndSetUser = createAsyncThunk(
  'auth/checkAsyncStorageAndSetUser',
  async () => {
    try {
      const userLogin = await getData('user');
      if (userLogin === null || userLogin === undefined) {
        return Promise.reject('User data not found');
      }
      return userLogin;
    } catch (error: any) {
      showError(error.message);
      throw error;
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLoggedIn: state => {
      state.isLoggedIn = true;
    },
    setUserLoggedOut: state => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUserAndSaveData.pending, state => {
        state.creatingUser = true;
        state.isLoggedIn = false;
      })
      .addCase(createUserAndSaveData.fulfilled, state => {
        state.creatingUser = false;
        state.isLoggedIn = true;
      })
      .addCase(createUserAndSaveData.rejected, (state, action) => {
        state.creatingUser = false;
        state.creatingUserError = action.payload as string;
        state.isLoggedIn = false;
      })
      .addCase(checkAsyncStorageAndSetUser.fulfilled, state => {
        state.isLoggedIn = true;
      })
      .addCase(checkAsyncStorageAndSetUser.rejected, state => {
        state.isLoggedIn = false;
      });
  },
});
export const {setUserLoggedIn, setUserLoggedOut} = authSlice.actions;
export default authSlice.reducer;
