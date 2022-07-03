import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import DatePicker from "../../Components/DatePicker";
const Screen1 = (props) => {
  const { report, updateReport } = React.useContext(GlobalState);

  const handleChange = (data) => {
    updateReport({ ...report, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView>
          <Headline style={styles.headline}>Personal Information</Headline>
          <TextInput
            style={style.input}
            label="Name"
            value={report.name}
            onChangeText={(text) => handleChange({ name: text })}
          />
          <DatePicker
            style={style.input}
            label="Date of Birth"
            value={report.dob}
            placeHolder={"Select Date"}
            onChange={(text) => handleChange({ dob: text })}
          />
          <TextInput
            style={style.input}
            label="Age"
            value={report.age}
            onChangeText={(text) => handleChange({ age: text })}
          />
          <TextInput
            style={style.input}
            label="Height"
            value={report.height}
            onChangeText={(text) => handleChange({ height: text })}
          />
          <TextInput
            style={style.input}
            label="Skin Color"
            value={report.skinColor}
            onChangeText={(text) => handleChange({ skinColor: text })}
          />
          <TextInput
            style={style.input}
            label="Ethnicity"
            value={report.ethnicity}
            onChangeText={(text) => handleChange({ ethnicity: text })}
          />
          <TextInput
            style={style.input}
            label="Missing Person's Description"
            value={report.description}
            placeholder={
              "A physical description, including any tattoos, scars, birthmarks etc and what they were wearing at the time of the disappearance."
            }
            multiline
            numberOfLines={10}
            onChangeText={(text) => handleChange({ description: text })}
          />
        </ScrollView>
        <NextPrevButton prev={""} next={routes.MISSING_PERSON2} />
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
export default Screen1;
