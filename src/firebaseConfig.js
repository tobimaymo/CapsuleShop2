// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw6lmKvb39eImEGxcB22G3q7ngSlP9VKA",
  authDomain: "capsulecorp-527ce.firebaseapp.com",
  projectId: "capsulecorp-527ce",
  storageBucket: "capsulecorp-527ce.appspot.com",
  messagingSenderId: "167366877487",
  appId: "1:167366877487:web:56219b672d84e6e0b1c1da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
