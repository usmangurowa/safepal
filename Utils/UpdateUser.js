import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/Firebase";
const UpdateUser = async (id, data) => {
  await setDoc(doc(firestore, "users", id), data, { merge: true });
};

export default UpdateUser;
