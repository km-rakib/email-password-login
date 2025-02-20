// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFb9-TOYn0ffeH7bZeNR05a_pK4ZJv1aY",
  authDomain: "email-password-login-707a5.firebaseapp.com",
  projectId: "email-password-login-707a5",
  storageBucket: "email-password-login-707a5.firebasestorage.app",
  messagingSenderId: "250089394508",
  appId: "1:250089394508:web:de51b30ec8294175337fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);