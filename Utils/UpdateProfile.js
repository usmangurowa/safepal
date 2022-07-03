import { auth } from "../config/Firebase";
import { updateProfile as updateUserProfile } from "firebase/auth";

const updateProfile = (data, callback) => {
  updateUserProfile(auth.currentUser, data)
    .then((user) => {
      callback(true);
    })
    .catch((error) => {
      callback(false);
    });
};

export default updateProfile;
