import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA2a3Ia3PwV26dT25W2AEYQMR1Z10KV5j0",
    authDomain: "chat-app-b275d.firebaseapp.com",
    projectId: "chat-app-b275d",
    storageBucket: "chat-app-b275d.appspot.com",
    messagingSenderId: "979674436067",
    appId: "1:979674436067:web:e9a528aedc2f141058d0d6",
    measurementId: "G-VP82B81KTM"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export function userSignIn() {
    signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}