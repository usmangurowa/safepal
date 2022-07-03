// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoM2Ei08TzSRyXTg-CWAo7ofV7hq149Gc",
  authDomain: "safety-d124f.firebaseapp.com",
  projectId: "safety-d124f",
  storageBucket: "safety-d124f.appspot.com",
  messagingSenderId: "811063859774",
  appId: "1:811063859774:web:1a5d72e2616373c9774f6f",
  measurementId: "G-9NWEBSD658",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, firestore, database, storage };
