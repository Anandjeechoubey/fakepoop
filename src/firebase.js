import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfcPvEXnwgNIof4S8MYwbbu812bmdMDXU",
    authDomain: "fakepoop-b46cb.firebaseapp.com",
    projectId: "fakepoop-b46cb",
    storageBucket: "fakepoop-b46cb.appspot.com",
    messagingSenderId: "35715587222",
    appId: "1:35715587222:web:cbdb5890bbec784231b6b7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;