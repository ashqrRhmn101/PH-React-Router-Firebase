// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDix0OI5Mcho5wEK0KNJ4m6soj8BYnOGHA",
  authDomain: "email-password-auth-eb2aa.firebaseapp.com",
  projectId: "email-password-auth-eb2aa",
  storageBucket: "email-password-auth-eb2aa.firebasestorage.app",
  messagingSenderId: "996325661915",
  appId: "1:996325661915:web:c68664f234f39a83de40fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
