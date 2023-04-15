import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCw5xQAl4637OX_5ma_AHGdCKrQJ_-D0hs",
    authDomain: "authentication-cf525.firebaseapp.com",
    projectId: "authentication-cf525",
    storageBucket: "authentication-cf525.appspot.com",
    messagingSenderId: "136427571353",
    appId: "1:136427571353:web:be4fe1205746b519969008"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);