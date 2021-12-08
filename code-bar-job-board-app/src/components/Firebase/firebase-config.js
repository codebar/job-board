import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from "./firebase-creds";



export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app)