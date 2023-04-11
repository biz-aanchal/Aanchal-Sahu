
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAxcpJW7FQDd1mIAatuShVWCFylXtRrXlw",
    authDomain: "aanchal-5c460.firebaseapp.com",
    projectId: "aanchal-5c460",
    storageBucket: "aanchal-5c460.appspot.com",
    messagingSenderId: "833122852053",
    appId: "1:833122852053:web:3bbc48d032b08eb684965c",
    measurementId: "G-RL5JSRFHK0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };