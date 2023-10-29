// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7PVw3LyeI_42c66xMGNKX4shCzy83rGM",
  authDomain: "girls-e-commerce-website.firebaseapp.com",
  projectId: "girls-e-commerce-website",
  storageBucket: "girls-e-commerce-website.appspot.com",
  messagingSenderId: "601110487809",
  appId: "1:601110487809:web:c5fa6e9f21cb6150b6b100",
  measurementId: "G-M0ML095NBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;