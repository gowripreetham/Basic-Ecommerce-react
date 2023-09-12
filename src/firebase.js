// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANrnwxfcGGoN41cG1W75unNF5PJIEQ1t0",
  authDomain: "basic-shopping-website.firebaseapp.com",
  projectId: "basic-shopping-website",
  storageBucket: "basic-shopping-website.appspot.com",
  messagingSenderId: "95712331463",
  appId: "1:95712331463:web:5a2d3bef3742d33f1ca0e2",
  measurementId: "G-8K7P8LS6SM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
