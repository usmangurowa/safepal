import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";
import NextPrevButton from "../../Components/NextPrevButton";
import Screen from "../../Components/Screen";
import style from "../../config/style";
import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";
const Screen3 = (props) => {
  const { report, updateReport } = React.useContext(GlobalState);

  const handleChange = (data) => {
    updateReport({ ...report, ...data });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView>
          <Headline style={styles.headline}>Contact Information</Headline>
          <Text style={styles.headline}>How Can we contact?</Text>
          <TextInput
            style={style.input}
            label="Phone Number"
            value={report.phone}
            onChangeText={(text) => handleChange({ phone: text })}
          />
          <TextInput
            style={style.input}
            label="Email Address"
            value={report.email}
            onChangeText={(text) => handleChange({ email: text })}
          />
          <TextInput
            style={style.input}
            label="Address"
            multiline
            numberOfLines={3}
            value={report.contactAddress}
            onChangeText={(text) => handleChange({ contactAddress: text })}
          />
        </ScrollView>
        <NextPrevButton
          prev={routes.MISSING_PERSON3}
          next={routes.SEND_REPORT}
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
export default Screen3;
