import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/Firebase";

const SignInWithGoogle = (props) => {
  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = async (callback) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("Welcome user");
        callback();
      })
      .catch((Err) => {
        alert("error");
      });
  };

  return handleSignInWithGoogle;
};

export default SignInWithGoogle;
