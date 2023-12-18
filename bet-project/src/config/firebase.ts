// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZK6223fDMprOkkuJ3Ab6aev3t9CNwS0c",
  authDomain: "champion-bet-3077e.firebaseapp.com",
  projectId: "champion-bet-3077e",
  storageBucket: "champion-bet-3077e.appspot.com",
  messagingSenderId: "10642745880",
  appId: "1:10642745880:web:27d535089ed637d01d316d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)

