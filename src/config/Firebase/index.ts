import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set, push, get} from 'firebase/database';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {FirebaseApp} from 'firebase/app';

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
const auth = getAuth(app);

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
