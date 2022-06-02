// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyCUb-mCFuZbZYh9CLr0xuJM-PLEhdzdQD4",
  authDomain: "wedding-1f158.firebaseapp.com",
  databaseURL: "https://wedding-1f158-default-rtdb.firebaseio.com/",
  projectId: "wedding-1f158",
  storageBucket: "wedding-1f158.appspot.com",
  messagingSenderId: "175084098982",
  appId: "1:175084098982:web:b77172b49271c507f4ab67",
  measurementId: "G-1LVDECNVST",
};

// Initialize Firebase
const app = initializeApp(config);
// initialize firestore
export const db = getDatabase(app);
