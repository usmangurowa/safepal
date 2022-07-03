import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import style from "../config/style";
import routes from "../Navigations/routes";
import LottieView from "lottie-react-native";

import { signInAnonymously } from "firebase/auth";
import { auth } from "../config/Firebase";

const WelcomeScreen = ({ navigation }) => {
  const handleAnonnymouse = () => {
    signInAnonymously(auth)
      .then(() => {
        // navigation.navigate(routes.FEED);
      })
      .catch((error) => {
        alert("error please try again");
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.animContainer}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/animation/safety.json")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} variant="headlineLarge">
          Safety Pal
        </Text>
        <Text style={styles.subtitle}>Your number one safety App</Text>
      </View>
      <View>
        <Button
          icon="account-plus"
          style={style.button.style}
          contentStyle={style.button.contentStyle}
          mode="contained"
          onPress={() => navigation.navigate(routes.SIGN_UP)}
        >
          Sign Up
        </Button>
        <Button
          style={style.button.style}
          contentStyle={style.button.contentStyle}
          mode="outlined"
          icon="login-variant"
          onPress={() => navigation.navigate(routes.SIGN_IN)}
        >
          Sign In
        </Button>
        <Button
          style={style.button.style}
          contentStyle={style.button.contentStyle}
          mode="outlined"
          icon="account"
          onPress={handleAnonnymouse}
        >
          Annonymouse Sign in
        </Button>
      </View>
    </View>
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
    fontSize: 60,
  },
  subtitle: {
    fontSize: 20,
  },
});
export default WelcomeScreen;
