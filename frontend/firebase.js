// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-4a6f3.firebaseapp.com",
  projectId: "vingo-food-delivery-4a6f3",
  storageBucket: "vingo-food-delivery-4a6f3.firebasestorage.app",
  messagingSenderId: "373615081331",
  appId: "1:373615081331:web:b0a18a4a52876139e1b706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app, auth}