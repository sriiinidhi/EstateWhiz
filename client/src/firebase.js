// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatewhiz-ff220.firebaseapp.com",
  projectId: "estatewhiz-ff220",
  storageBucket: "estatewhiz-ff220.firebasestorage.app",
  messagingSenderId: "637817113650",
  appId: "1:637817113650:web:4c22a1d36efb57c699802b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
