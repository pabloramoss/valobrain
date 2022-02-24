// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0YkDyIsLjgdzUMAldIE00sPbUZt694fw",
  authDomain: "valobrain.firebaseapp.com",
  projectId: "valobrain",
  storageBucket: "valobrain.appspot.com",
  messagingSenderId: "820226834933",
  appId: "1:820226834933:web:a3999d697e51acb89920bc",
  measurementId: "G-KSSF21H40F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export {db}