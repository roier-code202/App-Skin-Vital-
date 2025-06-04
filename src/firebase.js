// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXxpP5UyQPmiCEPK4Y1cTAKrQKWzobUI",
  authDomain: "inicio-sesion-skin-vital.firebaseapp.com",
  projectId: "inicio-sesion-skin-vital",
  storageBucket: "inicio-sesion-skin-vital.appspot.com", // Corrige aquí: era .app, debe ser .app**spot**.com
  messagingSenderId: "781742265642",
  appId: "1:781742265642:web:11d23f401a5feda2faba53",
  measurementId: "G-SN4CFQX09Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);