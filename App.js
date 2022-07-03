import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./Navigations/AuthNavigator";
import { GlobalProvider, GlobalState } from "./GlobalState/GlobalState";
import AppNavigator from "./Navigations/AppNavigator";
import MainNavigator from "./Navigations/MainNavigator";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1B1F2E",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};
export default function App() {
  return (
    <GlobalProvider context={GlobalState}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppState />
        </NavigationContainer>
      </PaperProvider>
    </GlobalProvider>
  );
}

const AppState = () => {
  const { user } = React.useContext(GlobalState);

  return <>{user.authenticated ? <MainNavigator /> : <AuthNavigator />}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
