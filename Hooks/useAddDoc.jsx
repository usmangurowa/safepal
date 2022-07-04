import React from "react";

import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/Firebase";

import { v4 as uuidv4 } from "uuid";

// import { firestore } from "../config/Firebase";
// const UpdateUser = async (id, data) => {
//   await setDoc(doc(firestore, "users", id), data, { merge: true });
// };

const useAddDoc = (collection) => {
  const [loading, setLoading] = React.useState(false);

  const sendDoc = async (data, callback = () => {}) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(
      doc(firestore, collection, id),
      { ...data, id },
      { merge: true }
    )
      .then((res) => {
        callback(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        callback(false);
      });
  };

  return { loading, sendDoc };
};

export default useAddDoc;
