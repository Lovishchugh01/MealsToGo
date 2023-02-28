import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBalpkjTI_NnC3gfNrt2_P_zw6Z6XH8KlE",
  authDomain: "mealstogo-64712.firebaseapp.com",
  projectId: "mealstogo-64712",
  storageBucket: "mealstogo-64712.appspot.com",
  messagingSenderId: "271007920837",
  appId: "1:271007920837:web:3981383a4ea9f4e5fcb6ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};
