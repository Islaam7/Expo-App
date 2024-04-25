// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvJo7sR_-FeTl9P-ZItJVDRtIGBpEjkHM",
    authDomain: "star-da96a.firebaseapp.com",
    projectId: "star-da96a",
    storageBucket: "star-da96a.appspot.com",
    messagingSenderId: "987559859776",
    appId: "1:987559859776:web:75d7ea493ccda843d3f1a5",
    measurementId: "G-VVEDPT5RCL"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



export { app, db, auth };