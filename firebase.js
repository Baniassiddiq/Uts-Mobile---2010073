import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_xop1RoYOHZ8sFLGktOwv5_YdJ_UE7gQ",
  authDomain: "uts-mobile-a4b05.firebaseapp.com",
  projectId: "uts-mobile-a4b05",
  storageBucket: "uts-mobile-a4b05.appspot.com",
  messagingSenderId: "593973734435",
  appId: "1:593973734435:web:745c3eb7400927b4c81596",
  measurementId: "G-SP98KE9RM2"
};

const app =initializeApp(firebaseConfig);
const auth = getAuth();


export {
  auth
}