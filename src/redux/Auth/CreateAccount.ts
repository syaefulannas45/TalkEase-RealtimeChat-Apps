import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';
import {AnyAction} from 'redux';
import {
  db,
  auth,
  createUserWithEmailAndPassword as createUser,
  ref,
  set,
} from '../../config';
import {showError, storeData} from '../../utils';
import {setUser} from './sliceAuth';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  uid: string;
}
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export const createAccount =
  (form: FormData): AppThunk =>
  async dispatch => {
    try {
      const userCredential = await createUser(auth, form.email, form.password);

      const newUserRef = ref(db, `users/${userCredential.user.uid}`);

      const newData = {
        fullName: form.fullName,
        email: form.email,
        uid: userCredential.user.uid,
      };
      await set(newUserRef, newData);
      await storeData('user', newData);
      dispatch(setUser(newData));
    } catch (error) {
      showError('Error Create Account');
    }
  };
