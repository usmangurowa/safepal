import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { signOut } from "firebase/auth";
import Screen from "../../Components/Screen/Screen";
import { auth } from "../../config/Firebase";
import routes from "../../Navigations/routes";
import colors from "../../config/colors";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate(routes.WELCOME_SCREEN);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Profile Coming Soon</Text>
        <Button icon="logout" mode="contained" onPress={handleSignOut}>
          Logout
        </Button>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
  title: {
    fontSize: 40,
    color: colors.primary,
    textAlign: "center",
  },
});
export default Profile;
