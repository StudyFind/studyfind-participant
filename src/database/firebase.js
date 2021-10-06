import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA2HhlpEPOZzuClQ-svONo3I9quxom1C9w",
  authDomain: "studyfind-development.firebaseapp.com",
  projectId: "studyfind-development",
  storageBucket: "studyfind-development.appspot.com",
  messagingSenderId: "629466210039",
  appId: "1:629466210039:web:94ae3e86e517a3ec91bdf2",
  measurementId: "G-5WQEGXGVZQ"
});

const auth = app.auth();
const storage = app.storage();
const firestore = app.firestore();

export { auth, storage, firestore };
