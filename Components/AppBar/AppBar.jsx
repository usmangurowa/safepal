import React from "react";
import { Appbar, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AppBar = ({ title = "Safe Pal" }) => {
  return (
    <Appbar.Header>
      <Appbar style={styles.bottom}>
        <Appbar.Content title={title} />
        <Appbar.Action
          style={styles.search}
          icon={({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          )}
          onPress={() => console.log("Pressed delete")}
        />
      </Appbar>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  search: {},
});

export default AppBar;
