// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSorjNfpJBsYs6iju7TYRyluV4ZobmXrc",
  authDomain: "mediatheque-19496.firebaseapp.com",
  projectId: "mediatheque-19496",
  storageBucket: "mediatheque-19496.appspot.com",
  messagingSenderId: "1069638482469",
  appId: "1:1069638482469:web:1c061abe4567cc5680ddcc",
  measurementId: "G-YM6WP5EZEV"
};


const initFirebase = () => {
    // Initialize Firebase 
    const app = initializeApp(firebaseConfig);
}

export default initFirebase;