import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import DatePicker from "../../Components/DatePicker";
const Screen2 = (props) => {
  const { report, updateReport } = React.useContext(GlobalState);

  const handleChange = (data) => {
    updateReport({ ...report, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView>
          <Headline style={styles.headline}>Last Seen Information</Headline>
          <TextInput
            style={style.input}
            label="Last Seen State"
            value={report.lastSeenState}
            onChangeText={(text) => handleChange({ lastSeenState: text })}
          />
          <TextInput
            style={style.input}
            label="Last Seen LGA"
            value={report.lastSeenLGA}
            onChangeText={(text) => handleChange({ lastSeenLGA: text })}
          />
          <TextInput
            style={style.input}
            label="Last Seen Full Address"
            multiline
            numberOfLines={3}
            placeholder="Where was the person last seen?"
            value={report.lastSeenAddress}
            onChangeText={(text) => handleChange({ lastSeenAddress: text })}
          />
          <DatePicker
            style={style.input}
            label="Last Seen Date"
            value={report.lastSeenDate}
            placeHolder={"Last Seen Date"}
            onChange={(text) => handleChange({ lastSeenDate: text })}
          />
        </ScrollView>
        <NextPrevButton
          prev={routes.MISSING_PERSON1}
          next={routes.MISSING_PERSON3}
        />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
  },
  headline: {
    textAlign: "center",
    paddingVertical: 10,
  },
});
export default Screen2;
