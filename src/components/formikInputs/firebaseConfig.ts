// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWK7_NcV8ZFJDvXTuhT23WhJI6wcR-SGQ",
  authDomain: "solutionhacksinterestform.firebaseapp.com",
  databaseURL: "https://solutionhacksinterestform-default-rtdb.firebaseio.com",
  projectId: "solutionhacksinterestform",
  storageBucket: "solutionhacksinterestform.appspot.com",
  messagingSenderId: "295145890252",
  appId: "1:295145890252:web:17bd9e4c9fd75738073d69",
  measurementId: "G-0J8WJHQVF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Realtime Database
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, analytics };
