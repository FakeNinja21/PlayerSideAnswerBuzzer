import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAcDuE3i2fFuHH7qd_t9t1FS1MtVLXOfH0",
    authDomain: "realtimemultiplayergame-47bf0.firebaseapp.com",
    databaseURL: "https://realtimemultiplayergame-47bf0-default-rtdb.firebaseio.com",
    projectId: "realtimemultiplayergame-47bf0",
    storageBucket: "realtimemultiplayergame-47bf0.appspot.com",
    messagingSenderId: "486211724119",
    appId: "1:486211724119:web:feb08165bf10822fd6d412",
    measurementId: "G-SR1P86XQ3W"
  };
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
