import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCXGQ5s5OVJ1J2F_OxLqZKqPhQ0WU9u47E",
  authDomain: "travel-land-cbc57.firebaseapp.com",
  projectId: "travel-land-cbc57",
  storageBucket: "travel-land-cbc57.appspot.com",
  messagingSenderId: "169301302770",
  appId: "1:169301302770:web:ca69001a8d38cc83479f6b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}

  

