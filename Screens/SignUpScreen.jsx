import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Snackbar,
  TextInput,
  Headline,
} from "react-native-paper";
import style from "../config/style";
import { auth } from "../config/Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import SignUp from "../Hooks/SignUp";
import SignInWithGoogle from "../Hooks/SignInWithGoogle";

const SignUpScreen = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
  });

  const { loading, error, handleSignUp } = SignUp();

  const callback = (user) => {
    alert("Welcome " + user);
  };

  const handleLogin = async () => {
    await handleSignUp(data, callback);
  };

  const handleSignInWithGoogle = SignInWithGoogle();

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", alignItems: "center", padding: 5 }}>
        <Headline style={{ borderBottomWidth: 2 }} variant="headlineLarge">
          Sign Up
        </Headline>
      </View>
      <TextInput
        label="Firstname"
        mode="flat"
        style={styles.input}
        value={data.firstname}
        onChangeText={(text) => setData({ ...data, firstname: text })}
      />
      <TextInput
        label="Lastname"
        mode="flat"
        style={styles.input}
        value={data.lastname}
        onChangeText={(text) => setData({ ...data, lastname: text })}
      />
      <TextInput
        label="Email"
        mode="flat"
        style={styles.input}
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
      />
      <TextInput
        label="Password"
        mode="flat"
        secureTextEntry
        textContentType="password"
        style={styles.input}
        value={data.password}
        onChangeText={(text) => setData({ ...data, password: text })}
      />
      <TextInput
        label="Confirm Password"
        mode="flat"
        secureTextEntry
        textContentType="password"
        style={styles.input}
        value={data.confirmPassword}
        onChangeText={(text) => setData({ ...data, confirmPassword: text })}
      />
      <Button
        loading={loading}
        mode="contained"
        style={style.button}
        contentStyle={style.button.contentStyle}
        icon="login-variant"
        onPress={handleLogin}
      >
        Register
      </Button>
      {/* <View style={styles.txtContainer}>
        <Text>OR</Text>
      </View>
      <Button
        mode="outlined"
        style={style.button}
        contentStyle={style.button.contentStyle}
        icon="login-variant"
        onPress={handleSignInWithGoogle}
      >
        Register With Google
      </Button> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: "flex",
    // alignItems: "center",
  },
  input: {
    marginVertical: 5,
  },
  // txtContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   padding: 5,
  // },
});
export default SignUpScreen;
