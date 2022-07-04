import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import TimePicker from "../../Components/TimePicker";
import DatePicker from "../../Components/DatePicker";
const TrackMeScreen1 = (props) => {
  const { track, updateTrack } = React.useContext(GlobalState);

  const handleChange = (data) => {
    updateTrack({ ...track, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.headline}>When are you coming back?</Text>
          <DatePicker
            style={style.input}
            label="Select Date"
            value={track.date}
            onChange={(text) => handleChange({ date: text })}
          />
          <TimePicker
            style={style.input}
            label="Select Time"
            value={track.time}
            onChange={(text) => handleChange({ time: text })}
          />
        </View>
        <NextPrevButton prev={routes.TRACK_1} next={routes.TRACK_3} />
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
export default TrackMeScreen1;
