import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../config/colors";
import { Text } from "react-native-paper";
const Fire = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 120,
          height: 120,
        }}
        source={require("../../assets/animation/fire.json")}
      />

      <Text style={styles.text}>Fire Outbreak</Text>
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
    marginVertical: 10,
  },
});
export default Fire;
