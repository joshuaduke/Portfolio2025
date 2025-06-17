// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq8L0-Ce0dEGdbB889UvHtmKcXSu7qB3k",
  authDomain: "portfolio2025-7c4c0.firebaseapp.com",
  projectId: "portfolio2025-7c4c0",
  storageBucket: "portfolio2025-7c4c0.firebasestorage.app",
  messagingSenderId: "961125598843",
  appId: "1:961125598843:web:1ba4746f0a4516bbaa84de",
  measurementId: "G-7FE9Y7D32X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);