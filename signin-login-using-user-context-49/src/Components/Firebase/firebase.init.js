// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj8ibpdUMOPdZVN8Ojkcgu6DxSUZnZyyA",
  authDomain: "signin-login-using-context.firebaseapp.com",
  projectId: "signin-login-using-context",
  storageBucket: "signin-login-using-context.firebasestorage.app",
  messagingSenderId: "48564544919",
  appId: "1:48564544919:web:5c7574b1fac4f19714d0d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
