// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCwdtW9kjx4mls2rrGK5ia0pOddCU2CUa4",
  authDomain: "react-app05-3b206.firebaseapp.com",
  databaseURL: "https://react-app05-3b206-default-rtdb.firebaseio.com",
  projectId: "react-app05-3b206",
  storageBucket: "react-app05-3b206.appspot.com",
  messagingSenderId: "879921147282",
  appId: "1:879921147282:web:ace9a386ad0191924b654b",
  measurementId: "G-8MD5CWN941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
export default analytics;