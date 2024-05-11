import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDRzdeacWU2EZ51zBeWZAvQd1JIYVDIzuM",
    authDomain: "cline-co.firebaseapp.com",
    projectId: "cline-co",
    storageBucket: "cline-co.appspot.com",
    messagingSenderId: "912648247118",
    appId: "1:912648247118:web:0736cde2defafe41e2b01f",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
