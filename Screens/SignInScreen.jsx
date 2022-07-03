import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";
import style from "../config/style";
import routes from "../Navigations/routes";
import SignIn from "../Hooks/SignIn";
const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const { loading, error, handleSignIn } = SignIn();

  const callback = () => {
    navigation.navigate(routes.APP);
  };
  const handleLogin = async () => {
    await handleSignIn(data, callback);
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
          source={require("../assets/animation/loginAnimation.json")}
        />
      </View>
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
      <Button
        loading={loading}
        mode="contained"
        style={style.button}
        contentStyle={style.button.contentStyle}
        icon="login-variant"
        onPress={handleLogin}
      >
        Login
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
  animContainer: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 20,
  },

  input: {
    marginVertical: 5,
    borderRadius: 10,
  },
  // txtContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   padding: 5,
  // },
});
export default SignInScreen;
