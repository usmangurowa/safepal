import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";

import NextPrevButton from "../../Components/NextPrevButton";

import Screen from "../../Components/Screen";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

import DatePicker from "../../Components/DatePicker";
const PersonalInfoScreen = (props) => {
  const { user } = React.useContext(GlobalState);

  const [info, setInfo] = React.useState({
    age: "",
    height: "",
    skinColor: "",
    ethnicity: "",
    description: "",
  });

  const handleChange = (data) => {
    setInfo({ ...info, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView>
          <Headline style={styles.headline}>Personal Information - 2</Headline>
          <TextInput
            style={style.input}
            label="Age"
            value={info.age}
            onChangeText={(text) => handleChange({ age: text })}
          />
          <DatePicker
            style={style.input}
            label="Height"
            value={info.height}
            placeHolder={"Select Date"}
            onChange={(text) => handleChange({ height: text })}
          />
          <TextInput
            style={style.input}
            label="Skin Color"
            value={info.skinColor}
            onChangeText={(text) => handleChange({ skinColor: text })}
          />
          <TextInput
            style={style.input}
            label="Ethnicity"
            value={info.ethnicity}
            onChangeText={(text) => handleChange({ ethnicity: text })}
          />
          <TextInput
            style={style.input}
            label="Description"
            value={info.description}
            multiline
            numberOfLines={10}
            onChangeText={(text) => handleChange({ description: text })}
          />
        </ScrollView>
        <NextPrevButton prev={routes.PERSONAL_INFO} next={routes.LOCATION} />
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
export default PersonalInfoScreen;
