// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkloAJ2tLBrGbx7SI_6ooVrxV5ksuR7mw",
  authDomain: "auth-moha-milon-33627.firebaseapp.com",
  projectId: "auth-moha-milon-33627",
  storageBucket: "auth-moha-milon-33627.appspot.com",
  messagingSenderId: "958024810484",
  appId: "1:958024810484:web:2de53df438277a20f703a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;