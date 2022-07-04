import React from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import CardItem from "../../Components/Card";
import Screen from "../../Components/Screen";
import GetReports from "../../Hooks/GetReports";
import routes from "../../Navigations/routes";
import LottieView from "lottie-react-native";
import { FAB, Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import * as Notifications from "expo-notifications";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../../config/Firebase";
import AppBar from "../../Components/AppBar";
import colors from "../../config/colors";

const Feed = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  // const { handleGetReports } = GetReports();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetData = async () => {
    setLoading(true);
    console.log("loading");
    const q = query(
      collection(firestore, "reports"),
      where("status", "!=", false)
    );

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
      console.log("end");
    });
    setLoading(false);
    setRefreshing(false);
  };
  React.useEffect(() => {
    handleGetData();
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AppBar />
      {loading ? (
        <React.Fragment>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/animation/loader.json")}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text style={styles.txt}>List of Missing People</Text>
          <FlatList
            data={data}
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
            renderItem={({ item }) => (
              <CardItem
                onPress={() => navigation.navigate(routes.REPORT_DETAIL, item)}
                item={item}
              />
            )}
            keyExtractor={(item) => item.id}
          />
          <FAB
            icon="plus"
            animated={true}
            color={colors.white}
            style={styles.fab}
            onPress={() => navigation.navigate(routes.MISSING)}
          />
        </React.Fragment>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  animContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },
  txt: {
    textAlign: "center",
    fontSize: 15,
  },
});
export default Feed;
