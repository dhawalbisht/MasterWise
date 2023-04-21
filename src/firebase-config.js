import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMFRLOnScGpTUWz3RfHOA_IJd2kD2IJIs",
  authDomain: "webwizards-c4292.firebaseapp.com",
  projectId: "webwizards-c4292",
  storageBucket: "webwizards-c4292.appspot.com",
  messagingSenderId: "623521414601",
  appId: "1:623521414601:web:eaa6ae1038b21744087c18"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);