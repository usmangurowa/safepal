import React from "react";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [status, setStatus] = React.useState({
    loading: false,
    error: "",
  });

  const handleSignIn = async (data, callback) => {
    setStatus({ ...status, loading: true });
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        setStatus({ ...status, loading: false });
        callback(res.user);
      })
      .catch((err) => {
        setStatus({ ...status, error: err.message, loading: false });
      });
  };
  return { loading: status.loading, error: status.error, handleSignIn };
};

export default SignIn;
