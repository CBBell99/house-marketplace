// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArlHKoInZQvv0nJDOiyL3Fhopb7nV_zhk",
  authDomain: "house-marketplace-ff6f7.firebaseapp.com",
  projectId: "house-marketplace-ff6f7",
  storageBucket: "house-marketplace-ff6f7.appspot.com",
  messagingSenderId: "599382122779",
  appId: "1:599382122779:web:df7f9a81c5ecede91133be"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()