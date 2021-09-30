// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa5KVkevPVtGDRCvmdsiJEBkHMv4EBsnw",
  authDomain: "react-linkedin-1e014.firebaseapp.com",
  projectId: "react-linkedin-1e014",
  storageBucket: "react-linkedin-1e014.appspot.com",
  messagingSenderId: "376875890364",
  appId: "1:376875890364:web:7b87a4fa08947a6eda42b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

// const db =getFirestore(app);
// const auth = getAuth(app);

export {db}
