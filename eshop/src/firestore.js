import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD87LOG_92LeJo8SmhHDu2gfY4HJAYMRP4",
  authDomain: "react-shop-f7be2.firebaseapp.com",
  projectId: "react-shop-f7be2",
  storageBucket: "react-shop-f7be2.appspot.com",
  messagingSenderId: "457333588024",
  appId: "1:457333588024:web:6c894b8491062233b826cd",
  measurementId: "G-FZ1HVLKS5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
