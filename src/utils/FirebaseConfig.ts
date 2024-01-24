import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIxbugv6HxBr3KuBO3DFxQ3YH84rdYJ6o",
  authDomain: "pokedex-project-1429b.firebaseapp.com",
  projectId: "pokedex-project-1429b",
  storageBucket: "pokedex-project-1429b.appspot.com",
  messagingSenderId: "518602665483",
  appId: "1:518602665483:web:32172d0bee85e65592e10e",
  measurementId: "G-VHJ6Y5M7HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
