import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import routes from "./routes";

import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = (props) => (
  <Stack.Navigator initialRouteName={routes.WELCOME_SCREEN}>
    <Stack.Screen
      options={{ headerShown: false }}
      name={routes.WELCOME_SCREEN}
      component={WelcomeScreen}
    />
    <Stack.Screen
      name={routes.SIGN_UP}
      component={SignUpScreen}
      options={{ title: "Sign Up" }}
    />
    <Stack.Screen
      name={routes.SIGN_IN}
      component={SignInScreen}
      options={{ title: "Sign In" }}
    />
    <Stack.Screen
      name={routes.APP}
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
