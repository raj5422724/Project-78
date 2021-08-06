import firebase from "firebase";
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyCtt_Aj3LAKX7mFmKR2rxvGLwX_x4wh2jM",
  authDomain: "project-34-ec467.firebaseapp.com",
  databaseURL: "https://project-34-ec467.firebaseio.com",
  projectId: "project-34-ec467",
  storageBucket: "project-34-ec467.appspot.com",
  messagingSenderId: "559262741617",
  appId: "1:559262741617:web:f2c30455ffaec647b297d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
