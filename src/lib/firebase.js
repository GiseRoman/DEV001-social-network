import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
const regist = (userN, email, pass) => createUserWithEmailAndPassword(auth, email, pass)
  .then(() => {
    updateProfile(getAuth().currentUser, {
      displayName: userN,
    });
  });
const currentUserInfo = () => auth.currentUser;
const savePost = (user, post, date, uid) => addDoc(collection(db, 'posts'), {
  user,
  post,
  date,
  uid,
});
const getPosts = () => getDocs(collection(db, 'posts'));
const onGetPost = (querySnapshot) => {
  const queryPost = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(queryPost, querySnapshot);
};
const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
const getPost = (id) => getDoc(doc(db, 'posts', id));
const updatePost = (id, newPost) => updateDoc(doc(db, 'posts', id), newPost);
const loginGoogle = (provider) => signInWithPopup(auth, provider);
const provider = new GoogleAuthProvider();
const logOut = async () => {
  await signOut(auth);
};

export {
  db,
  auth,
  login,
  regist,
  currentUserInfo,
  savePost,
  getPosts,
  onGetPost,
  deletePost,
  getPost,
  updatePost,
  loginGoogle,
  provider,
  logOut,
};
