// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXY2AM-xkcBDcwqHLo7YLA-FGOm0qhEoo",
  authDomain: "themeproject-a8c06.firebaseapp.com",
  databaseURL: "https://themeproject-a8c06-default-rtdb.firebaseio.com",
  projectId: "themeproject-a8c06",
  storageBucket: "themeproject-a8c06.appspot.com",
  messagingSenderId: "78399576381",
  appId: "1:78399576381:web:df774b8652a98495744d54",
  measurementId: "G-CBRFSH9D2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore}
export const auth = getAuth(app);
export default app