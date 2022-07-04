import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";

import TrackMeScreen1 from "../Screens/TrackMeScreens/TrackMeScreen1";
import { StatusBar } from "expo-status-bar";
import TrackMe from "../Screens/TrackMeScreens/TrackMe";
import TrackMeScreen2 from "../Screens/TrackMeScreens/TrackMeScreen2";
import TrackMeScreen3 from "../Screens/TrackMeScreens/TrackMeScreen3";
import TrackMeScreen4 from "../Screens/TrackMeScreens/TrackMeScreen4";

const Stack = createNativeStackNavigator();

const TrackMeNavigator = (props) => (
  <React.Fragment>
    <StatusBar style="dark" />
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.TRACK_START}
        component={TrackMe}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.TRACK_1}
        component={TrackMeScreen1}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.TRACK_2}
        component={TrackMeScreen2}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.TRACK_3}
        component={TrackMeScreen3}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.TRACK_4}
        component={TrackMeScreen4}
      />
    </Stack.Navigator>
  </React.Fragment>
);
export default TrackMeNavigator;
