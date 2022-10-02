// let firebaseConfig = {
//     // Enter your firebase credentials
// };

// firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDVnCpJTjBlUcvsErBllSMPjbNrbjAFujI",
  authDomain: "blogging-6d3cb.firebaseapp.com",
  projectId: "blogging-6d3cb",
  storageBucket: "blogging-6d3cb.appspot.com",
  messagingSenderId: "63501967827",
  appId: "1:63501967827:web:a447b020f79b9bd5dc8f26"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

let db=firebase.firestore();