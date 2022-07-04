import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";
import routes from "../../Navigations/routes";
import colors from "../../config/colors";

import { GlobalState } from "../../GlobalState/GlobalState";
import AppBar from "../../Components/AppBar";

import * as Notifications from "expo-notifications";

import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../../config/Firebase";
const Profile = ({ navigation }) => {
  const { user } = React.useContext(GlobalState);

  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate(routes.WELCOME_SCREEN);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGetData = async () => {
    setLoading(true);
    const q = query(
      collection(firestore, "trackings"),
      where("id", "!=", false)
    );
    onSnapshot(q, async (querySnapshot) => {
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push(doc.data());
      });
      setData(tmp);
    });
    setLoading(false);
  };
  React.useEffect(() => {
    handleGetData();
  }, []);

  return (
    <View style={styles.container}>
      <AppBar title={`${user.user.displayName} Profile`} />
      <Text style={styles.title}>Current Trackings</Text>

      <FlatList
        data={data}
        refreshing={refreshing}
        onRefresh={() => console.log("refreshing")}
        renderItem={({ item }) => (
          <Button icon="map-marker" style={styles.btn} mode="outlined">
            {item.location}
          </Button>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 10,
    display: "flex",

    height: "100%",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "900",
  },
  btn: {
    marginVertical: 10,
  },
});
export default Profile;
