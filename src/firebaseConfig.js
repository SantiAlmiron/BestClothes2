// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1zLMwv2vOe83ko3rsfk26QSCHpVBw9tk",
  authDomain: "fast-clothes.firebaseapp.com",
  projectId: "fast-clothes",
  storageBucket: "fast-clothes.appspot.com",
  messagingSenderId: "728822733182",
  appId: "1:728822733182:web:8b9421d2e21597803dfb2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)