// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzd7_0LLP5WqyEz08ncdEvDiy3QXU2O4",
  authDomain: "onion-restaurant-4e2d4.firebaseapp.com",
  projectId: "onion-restaurant-4e2d4",
  storageBucket: "onion-restaurant-4e2d4.appspot.com",
  messagingSenderId: "699017627540",
  appId: "1:699017627540:web:f9b87133e58b1004993181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;