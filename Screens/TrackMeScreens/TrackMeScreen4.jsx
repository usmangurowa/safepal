import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import LottieView from "lottie-react-native";

import * as Notifications from "expo-notifications";
import useAddDoc from "../../Hooks/useAddDoc";

const TrackMeScreen4 = ({ navigation }) => {
  const { user, track } = React.useContext(GlobalState);

  const { sendDoc, loading } = useAddDoc("trackings");

  const handleUpdateTrack = () => {
    sendDoc(track, handleStart);
  };

  const handleStart = async () => {
    navigation.navigate(routes.FEED);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Currently Tracking ${user.user.displayName}`,
        body: "Tracking has started and your location will be updated on the server every 30 seconds",
        data: {},
        vibrate: true,
      },
      trigger: { seconds: 1 },
    });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view}>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/animation/done.json")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <NextPrevButton
            prev={routes.TRACK_3}
            end={true}
            onEnd={handleUpdateTrack}
            next={""}
          />
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  view: {
    height: "80%",
    isplay: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    // textAlign: "center",
    paddingVertical: 10,
    fontSize: 50,
  },
});
export default TrackMeScreen4;
