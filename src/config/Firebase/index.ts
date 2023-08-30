import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set, push, get} from 'firebase/database';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  initializeAuth,
} from 'firebase/auth';
import {FirebaseApp} from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as firebaseAuth from 'firebase/auth';

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

const firebaseConfig = {
  apiKey: 'AIzaSyCnZLQsJntR7AHvtVR_046xCgmmHeAdKU4',
  authDomain: 'talkease-15c0d.firebaseapp.com',
  projectId: 'talkease-15c0d',
  storageBucket: 'talkease-15c0d.appspot.com',
  messagingSenderId: '50918455698',
  appId: '1:50918455698:web:da4726d1556cfffac6e94b',
  measurementId: 'G-DL36HFE6T2',
  databaseURL:
    'https://talkease-15c0d-default-rtdb.asia-southeast1.firebasedatabase.app',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth: Auth = initializeAuth(app, {
  persistence: reactNativePersistence(AsyncStorage),
});

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  ref,
  set,
  push,
  get,
  signInWithEmailAndPassword,
};
