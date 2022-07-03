import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import Screen from "../../Components/Screen/Screen";
import colors from "../../config/colors";
import style from "../../config/style";

import { GlobalState } from "../../GlobalState/GlobalState";
import routes from "../../Navigations/routes";

const GetStartedScreen = ({ navigation }) => {
  const { user } = React.useContext(GlobalState);
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text style={styles.title} variant="headlineLarge">
            Complete Your Profile
          </Text>
          <Text style={styles.title} variant="headlineLarge">
            {user.user.displayName}
          </Text>
        </View>
        <Button
          mode="contained"
          style={style.button.style}
          contentStyle={style.button.contentStyle}
          onPress={() => navigation.navigate(routes.PERSONAL_INFO)}
        >
          Start
        </Button>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  animContainer: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    paddingVertical: 120,
    paddingHorizontal: 20,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: colors.primary,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
  },
});
export default GetStartedScreen;
