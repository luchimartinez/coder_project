// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkcP2tBQdmpxIV-MpCNR6KkYnDPqv85v0",
  authDomain: "ecommercecoder-c244f.firebaseapp.com",
  projectId: "ecommercecoder-c244f",
  storageBucket: "ecommercecoder-c244f.appspot.com",
  messagingSenderId: "587243985797",
  appId: "1:587243985797:web:9fcb1a28cca3c4290e02ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)