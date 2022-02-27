// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import IFamily from "../types/FamilyType";
import { 
    getFirestore,
    CollectionReference,
    collection,
    DocumentData
} from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const fireApp = initializeApp(firebaseConfig);


// get database
export const firestore = getFirestore();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

export const familyCollection = createCollection<IFamily>('family');
