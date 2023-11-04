// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDUGJGJ6CeIbQtWjf6FdCbAJbLP63KECkI",

  authDomain: "packetpirate-f4b28.firebaseapp.com",

  projectId: "packetpirate-f4b28",

  storageBucket: "packetpirate-f4b28.appspot.com",

  messagingSenderId: "238004225531",

  appId: "1:238004225531:web:3acc935313989d7fbd775e",

  measurementId: "G-X9XD5Q8VVX"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore}
export const auth = getAuth(app);
export default app