// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCy9HVov2O-zejM7ij8uCT5xSPaJbOsOew",
    authDomain: "whatsapp-clone-68df5.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-68df5.firebaseio.com",
    projectId: "whatsapp-clone-68df5",
    storageBucket: "whatsapp-clone-68df5.appspot.com",
    messagingSenderId: "886571784539",
    appId: "1:886571784539:web:c9c9269424bf9c0a21a27e",
    measurementId: "G-KGXM0R8JLC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;