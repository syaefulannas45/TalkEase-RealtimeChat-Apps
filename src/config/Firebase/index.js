import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCnZLQsJntR7AHvtVR_046xCgmmHeAdKU4',
  authDomain: 'talkease-15c0d.firebaseapp.com',
  projectId: 'talkease-15c0d',
  storageBucket: 'talkease-15c0d.appspot.com',
  messagingSenderId: '50918455698',
  appId: '1:50918455698:web:da4726d1556cfffac6e94b',
  measurementId: 'G-DL36HFE6T2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = app;
const db = getDatabase(app);

export {firebase, db};
