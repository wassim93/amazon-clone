import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { db, auth };
