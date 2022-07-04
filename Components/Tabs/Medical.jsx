import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../config/colors";
import { Text } from "react-native-paper";
const Medical = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 120,
          height: 120,
        }}
        source={require("../../assets/animation/medical.json")}
      />

      <Text style={styles.text}>Medical Emergency</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "40%",
    margin: 10,
  },
  text: {
    fontWeight: "900",
    fontSize: 17,
    textAlign: "center",
  },
});
export default Medical;
