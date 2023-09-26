// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1PRgg63e3tSL1N22HMWeWGrO9SjYyHqs",
  authDomain: "shopy-a9fc9.firebaseapp.com",
  projectId: "shopy-a9fc9",
  storageBucket: "shopy-a9fc9.appspot.com",
  messagingSenderId: "121663617846",
  appId: "1:121663617846:web:9736ed73ed4a7e6d459197",
  measurementId: "G-WLP40CYN5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
