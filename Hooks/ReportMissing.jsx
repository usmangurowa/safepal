import React from "react";

import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/Firebase";

import { v4 as uuidv4 } from "uuid";

// import { firestore } from "../config/Firebase";
// const UpdateUser = async (id, data) => {
//   await setDoc(doc(firestore, "users", id), data, { merge: true });
// };

const ReportMissing = (props) => {
  const [loading, setLoading] = React.useState(false);

  const handleReport = async (data, callback = () => {}) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(
      doc(firestore, "reports", id),
      { ...data, id, status: "missing" },
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

  return { loading, handleReport };
};

export default ReportMissing;
