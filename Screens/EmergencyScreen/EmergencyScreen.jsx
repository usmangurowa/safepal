import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Screen from "../../Components/Screen";
import Fire from "../../Components/Tabs/Fire";
import Medical from "../../Components/Tabs/Medical";

const EmergencyScreen = (props) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.headline}>Select An Emergency</Text>
        <Fire />
        <Medical />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  headline: {
    fontSize: 30,
    paddingVertical: 30,
  },
});
export default EmergencyScreen;
