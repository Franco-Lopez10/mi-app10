// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAenKN88xhQEDNLAmoS3NuZ7HQpxbXB9Kg",
    authDomain: "francoshop-324ad.firebaseapp.com",
    projectId: "francoshop-324ad",
    storageBucket: "francoshop-324ad.appspot.com",
    messagingSenderId: "456452561158",
    appId: "1:456452561158:web:a56ecc99bb8db69c12a687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);