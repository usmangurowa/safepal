import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";

import EmergencyScreen from "../Screens/EmergencyScreen/EmergencyScreen";

const Stack = createNativeStackNavigator();

const EmergencyNavigator = (props) => (
  <React.Fragment>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.EMERGENCY_1} component={EmergencyScreen} />
    </Stack.Navigator>
  </React.Fragment>
);
export default EmergencyNavigator;
