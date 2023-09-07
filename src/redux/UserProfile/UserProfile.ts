import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  db,
  auth,
  ref as databaseRef,
  set as setDatabaseValue,
  push,
  get,
  update,
} from '../../config';
import {showError, storeData} from '../../utils';
import {setLoading} from '../Toggle';

export interface UserData {
  fullName?: string;
  uid?: string;
  biodata?: string;
  hobby?: string;
  photo?: any;
  background?: string;
}
interface Payload {
  user: UserData;
  navigation: any;
}

export const updateProfile = createAsyncThunk(
  'update/UserProfile',
  async ({user, navigation}: Payload, {dispatch}) => {
    const {fullName, uid, biodata, hobby, photo, background} = user;

    dispatch(setLoading(true));
    try {
      const userRef = databaseRef(db, `users/${uid}`);

      const newData: UserData = {
        fullName,
        uid,
      };
      if (biodata) newData.biodata = biodata;

      if (background) newData.background = background;

      if (photo) newData.photo = photo;

      if (hobby) newData.hobby = hobby;

      await update(userRef, newData);

      await storeData('user', newData);
      dispatch(setLoading(false));

      navigation.replace('UpdateProfile');
    } catch (error: any) {
      dispatch(setLoading(false));
      showError(error.message);
      console.log(error);
      throw new Error(error.message);
    }
  },
);
