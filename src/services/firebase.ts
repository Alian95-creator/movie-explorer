import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxzzHKMiGqQNq9ZcPRuwgRT2Zs_IVtsYw",
  authDomain: "movie-explorer-97474.firebaseapp.com",
  projectId: "movie-explorer-97474",
  storageBucket: "movie-explorer-97474.firebasestorage.app",
  messagingSenderId: "508719428465",
  appId: "1:508719428465:web:ecae7a602a471535a83cd0",
  measurementId: "G-FVXTM5BP74"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);