import React from "react";
import { auth } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import updateProfile from "../Utils/UpdateProfile";
const SignUp = () => {
  const [status, setStatus] = React.useState({
    loading: false,
    error: "",
  });

  const handleSignUp = async (data, callback) => {
    setStatus({ ...status, loading: true });
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        updateProfile(
          { displayName: `${data.firstname} ${data.lastname}` },
          () => {
            setStatus({ ...status, loading: false });
            callback(res.user.displayName);
          }
        );
      })
      .catch((err) => {
        setStatus({ ...status, error: err.message, loading: false });
      });
  };
  return { loading: status.loading, error: status.error, handleSignUp };
};

export default SignUp;
