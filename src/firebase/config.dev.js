// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfc-CdDnCDtvhPE9uDcozdcRnSq1pI_pU",
  authDomain: "react-cursos-8f971.firebaseapp.com",
  projectId: "react-cursos-8f971",
  storageBucket: "react-cursos-8f971.appspot.com",
  messagingSenderId: "30653084320",
  appId: "1:30653084320:web:289767095b34758a334fc5"
};

// Initialize Firebase
const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
