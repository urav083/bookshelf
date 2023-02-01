// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrLcFRFa9VC-Hy2RWgFCy7HT2fE-ZMF8Y",
    authDomain: "bookshelf-74275.firebaseapp.com",
    projectId: "bookshelf-74275",
    storageBucket: "bookshelf-74275.appspot.com",
    messagingSenderId: "1085592738878",
    appId: "1:1085592738878:web:11515cb0bfd18b00d2456f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;