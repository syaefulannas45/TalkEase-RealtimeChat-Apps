import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {
  db,
  createUserWithEmailAndPassword as createUserWithEmail,
  auth,
  ref as databaseRef,
  set as setDatabaseValue,
  push,
  signInWithEmailAndPassword,
  get,
} from '../../config';
import {getData, showError, storeData} from '../../utils';
import {setLoading} from '../Toggle';

export interface UserProfile {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  uid?: string;
  biodata?: string;
  hobby?: string;
}

interface AuthState {
  creatingUser: boolean;
  creatingUserError: string | null;
  isLoggedIn: boolean;
  user: UserProfile | null;
}
type UserThunkPayload = {
  form: UserProfile;
  navigation: any;
};

const initialState: AuthState = {
  creatingUser: false,
  creatingUserError: null,
  isLoggedIn: false,
  user: null,
};

export const createUserAndSaveData = createAsyncThunk<void, UserThunkPayload>(
  'auth/createUserAndSaveData',
  async ({form, navigation}, {dispatch}) => {
    const {email, password, confirmPassword, fullName} = form;
    dispatch(setLoading(true));
    try {
      if (password !== confirmPassword) {
        showError('Password dan Konfirmasi Password Harus Sama');
        dispatch(setLoading(false));
        return Promise.reject('Error dan Konfirmasi Password Harus Sama');
      }

      const userCredential = await createUserWithEmail(auth, email, password);
      const userDatabaseRef = databaseRef(
        db,
        `users/${userCredential.user.uid}`,
      );

      const newUser = {
        fullName,
        email,
        uid: userCredential.user.uid,
      };
      await setDatabaseValue(userDatabaseRef, newUser);

      await storeData('user', newUser);
      dispatch(setLoading(false));

      navigation.replace('UploadPhoto', newUser);
    } catch (error: any) {
      dispatch(setLoading(false));
      showError(error.message);
      return Promise.reject(error.message);
    }
  },
);

export const loginWithEmail = createAsyncThunk<void, UserThunkPayload>(
  'auth/loginWithEmail',
  async ({form, navigation}, {dispatch}) => {
    const {email, password} = form;
    if (!email || !password) {
      showError('Email dan Password harus diisi');
      return;
    }
    dispatch(setLoading(true));

    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);

      const userDatabaseRef = databaseRef(db, `users/${userLogin.user.uid}`);

      const snapshot = await get(userDatabaseRef);
      if (snapshot.exists()) {
        await storeData('user', snapshot.val());
      }
      dispatch(setLoading(false));
      navigation.replace('MainApp');
    } catch (error) {
      dispatch(setLoading(false));
      showError('Email dan Password Salah');
      return Promise.reject(error);
    }
  },
);

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
      .addCase(loginWithEmail.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(loginWithEmail.fulfilled, state => {
        state.isLoggedIn = true;
      })
      .addCase(loginWithEmail.rejected, state => {
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
