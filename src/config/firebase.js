import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const DB_CONFIG  = {
    apiKey: "AIzaSyBIqTUbDDS5nkcgz3rZScMsm3osZo7O8KM",
    authDomain: "student-e-diary-a3160.firebaseapp.com",
    databaseURL: "https://student-e-diary-a3160-default-rtdb.firebaseio.com",
    projectId: "student-e-diary-a3160",
    storageBucket: "student-e-diary-a3160.appspot.com",
    messagingSenderId: "666255510374",
    appId: "1:666255510374:web:2b915d7eca206cbee6d6a7"
};

function initFirebase(){
    if(!firebase.apps.length){
        firebase.initializeApp(DB_CONFIG);
    }
}

initFirebase();

//firebase.initializeApp(DB_CONFIG);
//firebase.firestore();
export default firebase;
