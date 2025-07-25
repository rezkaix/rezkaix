// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTObfs5bSzpt1fs--jGfH6oStOZZyHQNU",
  authDomain: "rezkaix-app-82c80.firebaseapp.com",
  projectId: "rezkaix-app-82c80",
  storageBucket: "rezkaix-app-82c80.firebasestorage.app",
  messagingSenderId: "664659784723",
  appId: "1:664659784723:web:20a0d62e3a93984190fbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export modules to use in other files
export { auth, db, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, collection, addDoc, getDocs, query, where };
