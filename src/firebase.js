import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTng7Guy8U2vavmnw_AU7xmXNGGdLO9ls",
    authDomain: "linkedin-clone-afbc6.firebaseapp.com",
    projectId: "linkedin-clone-afbc6",
    storageBucket: "linkedin-clone-afbc6.appspot.com",
    messagingSenderId: "511326423693",
    appId: "1:511326423693:web:2f0b957302dfc1c2cc70c4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};