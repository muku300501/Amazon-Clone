import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0AsignXVys2bE6KaJmMT5zzJkYZShRA4",
  authDomain: "amazom-clone-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://amazom-clone-mukund-chamariya.firebaseio.com",
  projectId: "amazom-clone-mukund-chamariya",
  storageBucket: "amazom-clone-mukund-chamariya.appspot.com",
  messagingSenderId: "463564251526",
  appId: "1:463564251526:web:911109388c89a65be44c07",
  measurementId: "G-LZB2CT8Y6N",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
