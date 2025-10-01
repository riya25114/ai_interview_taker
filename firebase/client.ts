// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9wiUwZC8zjqAI9gZGr1x0yq2mbBIbkHY",
  authDomain: "prepwise-655f6.firebaseapp.com",
  projectId: "prepwise-655f6",
  storageBucket: "prepwise-655f6.firebasestorage.app",
  messagingSenderId: "629453198817",
  appId: "1:629453198817:web:e26064c4af4e13ce4beea0",
  measurementId: "G-NF1PRBKQ66"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);