import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyASoiKegWbSvaJkBMk1h_0LOBdU-b6TjpA",
    authDomain: "linkdin-clone-a0ccb.firebaseapp.com",
    projectId: "linkdin-clone-a0ccb",
    storageBucket: "linkdin-clone-a0ccb.appspot.com",
    messagingSenderId: "543126619028",
    appId: "1:543126619028:web:da0d0a0e1b470e01a0c581"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig);
// connect everything last line 
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
