import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../config/Firebase";

const GetReports = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const handleGetReports = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(firestore, "reports"));
    let tmp = [];
    querySnapshot.forEach((doc) => {
      tmp.push(doc.data());
    });
    setData(tmp);
    setLoading(false);
  };

  return { loading, data, handleGetReports };
};

export default GetReports;
