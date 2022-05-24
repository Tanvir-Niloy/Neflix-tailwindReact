import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAwrWD0_OWcEZjgc3-8-I-rFBPglVv6Q-g",
  authDomain: "netflix-clone-6a541.firebaseapp.com",
  projectId: "netflix-clone-6a541",
  storageBucket: "netflix-clone-6a541.appspot.com",
  messagingSenderId: "924837464681",
  appId: "1:924837464681:web:46bec90712d1a5635830f8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)