import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4s7QHzLjEVL06AA_wG5TvNEZlTPQRwS0",
  authDomain: "facebook-clone-aee57.firebaseapp.com",
  projectId: "facebook-clone-aee57",
  storageBucket: "facebook-clone-aee57.appspot.com",
  messagingSenderId: "34823378768",
  appId: "1:34823378768:web:ef23a8bd64e18287be7e55",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
// console.log(firebase.auth());
export { auth, db };
