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
import {getData, showError, storeData} from '../../utils';

interface SavePhotoData {
  uid: string;
  photoForDB: string;
  navigation: any;
}

export const uploadPhoto = createAsyncThunk<string, SavePhotoData>(
  'image/savePhoto',
  async (data: SavePhotoData) => {
    const {uid, photoForDB, navigation} = data;
    try {
      const userDataBaseRef = databaseRef(db, `users/${uid}`);

      await update(userDataBaseRef, {photo: photoForDB});

      const dataStorage = await getData('user');
      if (dataStorage !== null) {
        dataStorage.photo = photoForDB;
        await storeData('user', dataStorage);
      }

      navigation.navigate('MainApp');

      return photoForDB;
    } catch (error: any) {
      showError('Gagal Save Photo');
      throw error.message;
    }
  },
);
