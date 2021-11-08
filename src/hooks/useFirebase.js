import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//init firebase app

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  return {
    user,
  };
};

export default useFirebase;
