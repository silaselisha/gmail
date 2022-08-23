import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { doc, onSnapshot, query, orderBy } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBLG7fEQtCEhHZNHKVf2mlOUblxw1eGvvM",
    authDomain: "fir-b860c.firebaseapp.com",
    projectId: "fir-b860c",
    storageBucket: "fir-b860c.appspot.com",
    messagingSenderId: "388447265848",
    appId: "1:388447265848:web:13ce0d8849825236b1f2cd",
    measurementId: "G-SEE6R6JNW1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { analytics, db, auth, provider } 
export { doc, onSnapshot, collection, addDoc, query, orderBy, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut }