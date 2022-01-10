import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { db, auth };
