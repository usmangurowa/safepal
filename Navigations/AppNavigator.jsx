import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from "../config/colors";
import Feed from "../Screens/AppScreens/Feed";
import Profile from "../Screens/AppScreens/Profile";
import routes from "./routes";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalState } from "../GlobalState/GlobalState";
import UpdateUser from "../Utils/UpdateUser";
import TrackMeNavigator from "./TrackMeNavigator";
import EmergencyNavigator from "./EmergencyNavigator";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  const { user } = React.useContext(GlobalState);
  const registerPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      UpdateUser(user.uid, { token: token.data });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    registerPushNotification();
  }, []);

  return (
    <Tab.Navigator barStyle={{ backgroundColor: colors.primary }}>
      <Tab.Screen
        name={routes.FEED}
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="comment-quote"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.EMERGENCY}
        component={EmergencyNavigator}
        options={{
          tabBarLabel: "Emergency",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="car-emergency"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.TRACK}
        component={TrackMeNavigator}
        options={{
          tabBarLabel: "Track Me",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
