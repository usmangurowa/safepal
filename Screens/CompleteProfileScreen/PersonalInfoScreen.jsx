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
    name: user.user.displayName,
    dob: "",
    state: "",
    lga: "",
    address: "",
    street: "",
    houseNumber: "",
    description: "",
  });

  const handleChange = (data) => {
    setInfo({ ...info, ...data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView>
          <Headline style={styles.headline}>Personal Information</Headline>
          <TextInput
            style={style.input}
            label="Name"
            value={info.name}
            onChangeText={(text) => handleChange({ name: text })}
          />
          <DatePicker
            style={style.input}
            label="Date of Birth"
            value={info.dob}
            placeHolder={"Select Date"}
            onChange={(text) => handleChange({ dob: text })}
          />
          <TextInput
            style={style.input}
            label="State Of Residence"
            value={info.state}
            onChangeText={(text) => handleChange({ state: text })}
          />
          <TextInput
            style={style.input}
            label="Local Government Area"
            value={info.lga}
            onChangeText={(text) => handleChange({ lga: text })}
          />
          <TextInput
            style={style.input}
            label="Address"
            value={info.address}
            onChangeText={(text) => handleChange({ address: text })}
          />
        </ScrollView>
        <NextPrevButton prev={""} next={routes.PERSONAL_INFO2} />
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
