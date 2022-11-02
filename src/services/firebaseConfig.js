import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_66XEALFPu5PacBGaUCng9R2-BkBrUi8",
  authDomain: "proyecto-react-d8334.firebaseapp.com",
  projectId: "proyecto-react-d8334",
  storageBucket: "proyecto-react-d8334.appspot.com",
  messagingSenderId: "307962049319",
  appId: "1:307962049319:web:3cf3afb55e84d215ec6f02"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)