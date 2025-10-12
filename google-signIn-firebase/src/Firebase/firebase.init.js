// Import the functions you need from the SDKs you need
// Do Not Share Config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzjpJFdT5VF0n48R7j0l-6cgGceBnKjHs",
  authDomain: "simple-sign-in-c6714.firebaseapp.com",
  projectId: "simple-sign-in-c6714",
  storageBucket: "simple-sign-in-c6714.firebasestorage.app",
  messagingSenderId: "64625686561",
  appId: "1:64625686561:web:2683c6712053b426df4b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);