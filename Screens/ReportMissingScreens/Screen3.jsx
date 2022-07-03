import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Headline } from "react-native-paper";
import { v4 as uuidv4 } from "uuid";
import NextPrevButton from "../../Components/NextPrevButton";
import Screen from "../../Components/Screen";
import colors from "../../config/colors";
import style from "../../config/style";
import { GlobalState } from "../../GlobalState/GlobalState";
import LottieView from "lottie-react-native";
import routes from "../../Navigations/routes";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import * as ImagePicker from "expo-image-picker";
import { storage } from "../../config/Firebase";

const Screen3 = (props) => {
  const { report, updateReport } = React.useContext(GlobalState);

  const [loading, setLoading] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setLoading(true);
      try {
        const response = await fetch(result.uri);
        const data = await response.blob();
        const imgRef = ref(
          storage,
          `reports/${uuidv4()}.${data.type.split("/")[1]}`
        );
        uploadBytes(imgRef, data)
          .then((snapshot) => {
            getDownloadURL(imgRef)
              .then((url) => {
                updateReport({ ...report, image: url });
                setLoading(false);
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  const requestCameraPermision = async () => {
    try {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) alert("You need to enable permissions to photo library");
    } catch (error) {
      alert("Error enabling camera permission");
    }
  };

  React.useEffect(() => {
    requestCameraPermision();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Headline style={styles.headline}>Add Recent Picture</Headline>
        <View style={styles.pic}>
          {loading ? (
            <LottieView
              autoPlay
              style={{
                width: 200,
                height: 200,
              }}
              source={require("../../assets/animation/loader.json")}
            />
          ) : (
            <React.Fragment>
              {report.image ? (
                <React.Fragment>
                  <Image
                    source={{ uri: report.image }}
                    style={{ height: 300, width: 300 }}
                  />
                  <Button
                    mode="contained"
                    onPress={pickImage}
                    contentStyle={{ padding: 20 }}
                    icon={"plus"}
                  >
                    Update
                  </Button>
                </React.Fragment>
              ) : (
                <Button
                  mode="contained"
                  onPress={pickImage}
                  contentStyle={{ padding: 20 }}
                  icon={"plus"}
                >
                  Add Photo
                </Button>
              )}
            </React.Fragment>
          )}
        </View>
        <NextPrevButton
          prev={routes.MISSING_PERSON2}
          next={routes.MISSING_PERSON4}
        />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
  },
  pic: {
    height: "80%",
    backgroundColor: colors.gray,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headline: {
    textAlign: "center",
    paddingVertical: 10,
  },
});
export default Screen3;
