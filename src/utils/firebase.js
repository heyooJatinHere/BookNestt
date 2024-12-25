// /src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkvrCIU8V0syD6H1w5RWt5aKXpOX6zFuc",
    authDomain: "booknest-8271d.firebaseapp.com",
    projectId: "booknest-8271d",
    storageBucket: "booknest-8271d.firebasestorage.app",
    messagingSenderId: "745605006462",
    appId: "1:745605006462:web:4381563f5cdca6f5ee842f",
    measurementId: "G-S0XNKH190K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
