// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB169AHQhAbXLiZaiT3--vXgxZ_e5HV4w",
  authDomain: "chatgpt-messenger-fd5c6.firebaseapp.com",
  projectId: "chatgpt-messenger-fd5c6",
  storageBucket: "chatgpt-messenger-fd5c6.appspot.com",
  messagingSenderId: "1040193144041",
  appId: "1:1040193144041:web:e847036a55308f4f151c78"
};


// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
