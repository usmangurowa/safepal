import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CardItem from "../../Components/Card";
import Screen from "../../Components/Screen/Screen";
import GetReports from "../../Hooks/GetReports";
import routes from "../../Navigations/routes";
import LottieView from "lottie-react-native";

import * as Notifications from "expo-notifications";

import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../../config/Firebase";

const Feed = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  // const { handleGetReports } = GetReports();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetData = async () => {
    setLoading(true);
    const q = query(
      collection(firestore, "reports"),
      where("status", "!=", false)
    );
    // const q = await getDocs(collection(firestore, "reports"));
    onSnapshot(q, async (querySnapshot) => {
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push(doc.data());
      });

      if (querySnapshot.docChanges().length === 1) {
        querySnapshot.docChanges().forEach(async (change) => {
          const d = change.doc.data();
          await Notifications.scheduleNotificationAsync({
            content: {
              title: `${d.name} is currently ${d.status}`,
              body: d.description,
              data: d,
              vibrate: true,
            },
            trigger: { seconds: 1 },
          });
        });
      }
      setData(tmp);
    });
    setLoading(false);
  };
  React.useEffect(() => {
    handleGetData();
    // handleGetReports();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.animContainer}>
            <LottieView
              autoPlay
              style={{
                width: 200,
                height: 200,
              }}
              source={require("../../assets/animation/loader.json")}
            />
          </View>
        ) : (
          <FlatList
            data={data}
            refreshing={refreshing}
            onRefresh={() => console.log("refreshing")}
            renderItem={({ item }) => (
              <CardItem
                onPress={() => navigation.navigate(routes.REPORT_DETAIL, item)}
                item={item}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {},
  animContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
export default Feed;
