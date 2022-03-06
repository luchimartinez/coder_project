import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBkcP2tBQdmpxIV-MpCNR6KkYnDPqv85v0",
    authDomain: "ecommercecoder-c244f.firebaseapp.com",
    projectId: "ecommercecoder-c244f",
    storageBucket: "ecommercecoder-c244f.appspot.com",
    messagingSenderId: "587243985797",
    appId: "1:587243985797:web:9fcb1a28cca3c4290e02ec"
  };

  const app = initializeApp(firebaseConfig);

  export const firestoreDb = getFirestore(app)