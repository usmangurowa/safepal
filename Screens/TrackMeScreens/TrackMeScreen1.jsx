import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import TimePicker from "../../Components/TimePicker";
const TrackMeScreen1 = (props) => {
  const { track, updateTrack } = React.useContext(GlobalState);

  const handleChange = (data) => {
    updateTrack({ ...track, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.headline}>Where are you going?</Text>
          <TextInput
            style={style.input}
            label="Location"
            placeholder="Enter full address of where you are going"
            value={track.location}
            onChangeText={(text) => handleChange({ location: text })}
          />
        </View>
        <NextPrevButton prev={""} next={routes.TRACK_2} />
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
