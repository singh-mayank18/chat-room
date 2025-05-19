// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
   apiKey: "AIzaSyATqQXjBXrjZLovu7ZrIYiaik6iS9bmZBE",
   authDomain: "chat-app-7b8f0.firebaseapp.com",
   projectId: "chat-app-7b8f0",
   storageBucket: "chat-app-7b8f0.firebasestorage.app",
   messagingSenderId: "716526819772",
   appId: "1:716526819772:web:e6e916ad6b1c7e804e33b9"//
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();