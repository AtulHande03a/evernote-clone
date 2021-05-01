import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1Fp1VnbkJv201_ADYRrgzdfWaaeuVcmc",
  authDomain: "evernote-clone-6cb81.firebaseapp.com",
  projectId: "evernote-clone-6cb81",
  storageBucket: "evernote-clone-6cb81.appspot.com",
  messagingSenderId: "577960226464",
  appId: "1:577960226464:web:f752f75c2f5f1b0fa1a3c5",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
