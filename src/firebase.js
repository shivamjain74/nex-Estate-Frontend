// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-b3c26.firebaseapp.com",
  projectId: "real-estate-mern-b3c26",
  storageBucket: "real-estate-mern-b3c26.appspot.com",
  messagingSenderId: "73453085960",
  appId: "1:73453085960:web:4e4c82f5571beb479678bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

