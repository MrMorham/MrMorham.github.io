// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAgmsH0q9-LT5xVgSK3XkygIU7yg7QaHms",
  authDomain: "traveller-a2603.firebaseapp.com",
  databaseURL: "https://traveller-a2603-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "traveller-a2603.appspot.com",
  projectId: "traveller-a2603",
  messagingSenderId: "751353908900",
  appId: "1:751353908900:web:232a883c214a695f502031",
  measurementId: "G-DRDVQE6DWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase();
