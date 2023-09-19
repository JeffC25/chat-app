import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyAT_7411VVAQkbOBOSY38Rx1-XFh0FoRLQ",
  
    authDomain: "chat-app-2b8a7.firebaseapp.com",
  
    databaseURL: "https://chat-app-2b8a7-default-rtdb.firebaseio.com",
  
    projectId: "chat-app-2b8a7",
  
    storageBucket: "chat-app-2b8a7.appspot.com",
  
    messagingSenderId: "429862817047",
  
    appId: "1:429862817047:web:4c8058f1ee68849518bb52",
  
    measurementId: "G-2LFEP4X5MM"
  
  };
  
export const app = initializeApp(firebaseConfig);