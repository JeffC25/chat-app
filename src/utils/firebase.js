import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA2a3Ia3PwV26dT25W2AEYQMR1Z10KV5j0",
    authDomain: "chat-app-b275d.firebaseapp.com",
    projectId: "chat-app-b275d",
    storageBucket: "chat-app-b275d.appspot.com",
    messagingSenderId: "979674436067",
    appId: "1:979674436067:web:e9a528aedc2f141058d0d6",
    measurementId: "G-VP82B81KTM",
    databaseURL: "https://chat-app-b275d-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);