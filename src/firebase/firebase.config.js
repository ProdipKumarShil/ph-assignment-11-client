// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49pIB0ZD4Psi7Fr_CBaozFlRiGr01Qu8",
  authDomain: "candy-land-toys.firebaseapp.com",
  projectId: "candy-land-toys",
  storageBucket: "candy-land-toys.appspot.com",
  messagingSenderId: "1250824189",
  appId: "1:1250824189:web:fcfdadc9d8df162d791394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app