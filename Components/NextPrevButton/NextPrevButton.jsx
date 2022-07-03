import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import style from "../../config/style";
const NextPrevButton = ({ next, prev }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        icon="arrow-left"
        mode="contained"
        disabled={!Boolean(prev)}
        style={style.button.style}
        contentStyle={style.button.contentStyle}
        onPress={() => navigation.navigate(prev)}
      >
        Prev
      </Button>
      <Button
        icon="arrow-right"
        mode="contained"
        disabled={!Boolean(next)}
        style={style.button.style}
        contentStyle={[
          style.button.contentStyle,
          { flexDirection: "row-reverse" },
        ]}
        onPress={() => navigation.navigate(next)}
      >
        Next
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
export default NextPrevButton;
