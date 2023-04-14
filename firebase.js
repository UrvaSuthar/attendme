// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcSgGILjVVn7Iulrcbs-oQaoRa_RdxmE",
  authDomain: "auth-practice-6abd0.firebaseapp.com",
  projectId: "auth-practice-6abd0",
  storageBucket: "auth-practice-6abd0.appspot.com",
  messagingSenderId: "401977191000",
  appId: "1:401977191000:web:6f242c298976d2907e382d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// logic: firbaase is initialized don't re-initialize
// if it is already initialized else use initializedapp
// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = getAuth(app);

// export default auth;