import { async } from "@firebase/util";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/Firebase";

const GetUserInfo = async (id, callback = () => {}) => {
  const docSnap = await getDoc(doc(firestore, "users", id));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export default GetUserInfo;
