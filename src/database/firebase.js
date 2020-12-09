import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB0_PyqZxFZm8t0jY3PAFyP8oMxFalCYGA",
  authDomain: "studyfind-researcher.firebaseapp.com",
  databaseURL: "https://studyfind-researcher.firebaseio.com",
  projectId: "studyfind-researcher",
  storageBucket: "studyfind-researcher.appspot.com",
  messagingSenderId: "434311866185",
  appId: "1:434311866185:web:0c916f13f4841e239f1c98",
});

const auth = app.auth();
const storage = app.storage();
const database = app.database();
const firestore = app.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, storage, database, firestore, googleAuthProvider, facebookAuthProvider };
