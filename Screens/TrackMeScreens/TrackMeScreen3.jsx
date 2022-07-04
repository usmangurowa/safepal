import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import TimePicker from "../../Components/TimePicker";
const TrackMeScreen3 = (props) => {
  const { track, updateTrack } = React.useContext(GlobalState);

  const handleChange = (data) => {
    updateTrack({ ...track, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.headline}>What is your reason for going?</Text>
          <Text>This field is optional</Text>
          <TextInput
            style={style.input}
            label="Reason"
            value={track.reason}
            onChangeText={(text) => handleChange({ reason: text })}
          />
        </View>
        <NextPrevButton prev={routes.TRACK_2} next={routes.TRACK_4} />
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
  },
  headline: {
    // textAlign: "center",
    paddingVertical: 10,
    fontSize: 50,
  },
});
export default TrackMeScreen3;
