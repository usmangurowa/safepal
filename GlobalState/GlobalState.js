import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";
import GetUserInfo from "../Utils/GetUserInfo";

import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const GlobalState = React.createContext();

const initUser = {
  user: null,
  authenticated: false,
  profile: null,
};

const reportInit = {
  name: "",
  dob: "",
  address: "",
  age: "",
  height: "",
  skinColor: "",
  ethnicity: "",
  description: "",
  lastSeenAddress: "",
  lastSeenState: "",
  lastSeenLGA: "",
  lastSeenDate: "",
  email: "",
  phone: "",
  contactAddress: "",
};

const GlobalProvider = (props) => {
  const { children } = props;

  const [user, setUser] = React.useState(initUser);

  const [report, updateReport] = React.useState(reportInit);

  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          ...user,
          user: user,
          authenticated: true,
        });
        // const userInfo = await GetUserInfo();
        // if (userInfo) {
        //   setUser({
        //     ...user,
        //     profile: userInfo,
        //   });
        // }
      } else {
        setUser(initUser);
      }
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // setNotification(notification);
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <GlobalState.Provider value={{ user, report, updateReport }}>
      {children}
    </GlobalState.Provider>
  );
};

export { GlobalState, GlobalProvider };
