export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBNcxKpLRTukOpKkUOzEbWxfQDhzkI-RHY",
        authDomain: "games-store-c039b.firebaseapp.com",
        projectId: "games-store-c039b",
        storageBucket: "games-store-c039b.appspot.com",
        messagingSenderId: "797340755113",
        appId: "1:797340755113:web:4efe0250010cdb59c635b8"
      }
};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNcxKpLRTukOpKkUOzEbWxfQDhzkI-RHY",
  authDomain: "games-store-c039b.firebaseapp.com",
  projectId: "games-store-c039b",
  storageBucket: "games-store-c039b.appspot.com",
  messagingSenderId: "797340755113",
  appId: "1:797340755113:web:4efe0250010cdb59c635b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);