import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwPWkcBwdJhEO2a7aFhbTLGw4o_PPmui8",
  authDomain: "fir-auth-39597.firebaseapp.com",
  projectId: "fir-auth-39597",
  storageBucket: "fir-auth-39597.appspot.com",
  messagingSenderId: "386303713890",
  appId: "1:386303713890:web:4299d1a3e87573e7eb273b",
  measurementId: "G-PZCLRDQPSH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
