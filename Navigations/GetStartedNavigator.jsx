import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";

import GetStartedScreen from "../Screens/CompleteProfileScreen/GetStartedScreen";
import PersonalInfoScreen from "../Screens/CompleteProfileScreen/PersonalInfoScreen";
import PersonalInfoScreen2 from "../Screens/CompleteProfileScreen/PersonalInfoScreen2";
import LocationScreen from "../Screens/CompleteProfileScreen/LocationScreen";

const Stack = createNativeStackNavigator();

const GetStartedNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.GET_STARTED}
      component={GetStartedScreen}
      options={{ title: "Complete Your Profile" }}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right", title: "Personal Information" }}
      name={routes.PERSONAL_INFO}
      component={PersonalInfoScreen}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right", title: "Personal Information" }}
      name={routes.PERSONAL_INFO2}
      component={PersonalInfoScreen2}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right", title: "Location & Address" }}
      name={routes.LOCATION}
      component={LocationScreen}
    />
  </Stack.Navigator>
);
export default GetStartedNavigator;
