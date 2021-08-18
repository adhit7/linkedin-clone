import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDcUQONCUgIM8A2GrrXyP0kUaWq3ucCUfc",
    authDomain: "linkedin-fec0a.firebaseapp.com",
    projectId: "linkedin-fec0a",
    storageBucket: "linkedin-fec0a.appspot.com",
    messagingSenderId: "200377729087",
    appId: "1:200377729087:web:7440df7bfda0afe6e8f88a",
    measurementId: "G-P5PCZ5NLPE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };