import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDr9bmpRYTDqXMR4Tl_Wu4vvxT77PFONpU',
  authDomain: 'sn-lyds.firebaseapp.com',
  projectId: 'sn-lyds',
  storageBucket: 'sn-lyds.appspot.com',
  messagingSenderId: '605009956816',
  appId: '1:605009956816:web:a585347d32dc33b55973d5',
  measurementId: 'G-6GGGT5BTPX',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
const regist = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export {
  db,
  auth,
  login,
  regist,
};
