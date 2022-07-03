import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import GetStartedScreen from "../Screens/ReportMissingScreens/GetStartedScreen";
import Screen1 from "../Screens/ReportMissingScreens/Screen1";
import Screen2 from "../Screens/ReportMissingScreens/Screen2";
import Screen3 from "../Screens/ReportMissingScreens/Screen3";
import Screen4 from "../Screens/ReportMissingScreens/Screen4";
import SendReport from "../Screens/ReportMissingScreens/SendReport";

const Stack = createNativeStackNavigator();

const AddMissingNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.MISSING_PERSON}
      component={GetStartedScreen}
      options={{ title: "Complete Your Profile" }}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name={routes.MISSING_PERSON1}
      component={Screen1}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name={routes.MISSING_PERSON2}
      component={Screen2}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name={routes.MISSING_PERSON3}
      component={Screen3}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name={routes.MISSING_PERSON4}
      component={Screen4}
    />
    <Stack.Screen
      options={{ animation: "slide_from_right" }}
      name={routes.SEND_REPORT}
      component={SendReport}
    />
  </Stack.Navigator>
);
export default AddMissingNavigator;
