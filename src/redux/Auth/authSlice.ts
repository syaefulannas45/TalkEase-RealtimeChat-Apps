import {AppDispatch} from './../store';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {
  db,
  createUserWithEmailAndPassword,
  auth,
  ref,
  set,
  push,
} from '../../config';
import {getData, showError, storeData} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {User} from 'firebase/auth';

export interface UserCredentials {
  fullName: string;
  email: string;
  password: string;
  uid?: string;
}

interface AuthState {
  creatingUser: boolean;
  creatingUserError: string | null;
  isLoggedIn: boolean;
  user: UserCredentials | null;
}
type CreateUserThunkPayload = {
  form: UserCredentials;
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
>('auth/createUserAndSaveData', async ({form, navigation}, {dispatch}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password,
    );
    const userRef = ref(db, `users/${userCredential.user.uid}`);

    const newData = {
      fullName: form.fullName,
      email: form.email,
      uid: userCredential.user.uid,
    };
    await set(userRef, newData);
    await storeData('user', newData);
    dispatch(setUser({...newData, password: ''}));
    navigation('UploadPhoto', newData);
  } catch (error: any) {
    showError(error.message);
  }
});
export const checkAsyncStorageAndSetUser = createAsyncThunk(
  'auth/checkAsyncStorageAndSetUser',
  async (_, {dispatch}) => {
    try {
      const userLogin = await getData('user');
      if (userLogin) {
        dispatch(setUser(userLogin));
      }
    } catch (error: any) {
      showError(error.message);
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserCredentials | null>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUserAndSaveData.pending, state => {
        state.creatingUser = true;
      })
      .addCase(createUserAndSaveData.fulfilled, state => {
        state.creatingUser = false;
      })
      .addCase(createUserAndSaveData.rejected, (state, action) => {
        state.creatingUser = false;
        state.creatingUserError = action.payload as string;
      });
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
