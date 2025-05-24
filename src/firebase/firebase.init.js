// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc5AkYTFIuqN4d4BjRX_qFEamQnUWNHBQ",
  authDomain: "islamick-blog-c0335.firebaseapp.com",
  projectId: "islamick-blog-c0335",
  storageBucket: "islamick-blog-c0335.firebasestorage.app",
  messagingSenderId: "14256821974",
  appId: "1:14256821974:web:d3944eb2b52cc0640e9b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth