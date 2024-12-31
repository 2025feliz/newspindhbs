import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
   apiKey: "AIzaSyAGQBOZsnd-x85AhTysaNgza9lanlhW4SA",
  authDomain: "magia-infinita.firebaseapp.com",
  projectId: "magia-infinita",
  storageBucket: "magia-infinita.appspot.com",
  messagingSenderId: "281230398674",
  appId: "1:281230398674:web:377b8d9d8b1b29f62a490b"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage };
