import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import AppNavigator from "./AppNavigator";
import GetStartedNavigator from "./GetStartedNavigator";
import GetStartedScreen from "../Screens/CompleteProfileScreen/GetStartedScreen";
import ReportDetail from "../Screens/AppScreens/ReportDetail";
import AddMissingNavigator from "./AddMissingNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = (props) => (
  <Stack.Navigator initialRouteName={routes.APP}>
    <Stack.Screen
      options={{ headerShown: false }}
      name={routes.APP}
      component={AppNavigator}
    />
    <Stack.Screen
      options={({ route }) => ({ title: route.params.name })}
      name={routes.REPORT_DETAIL}
      component={ReportDetail}
    />
    <Stack.Screen
      name={routes.COMPLETE_PROFILE}
      component={GetStartedNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.MISSING}
      component={AddMissingNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default MainNavigator;
