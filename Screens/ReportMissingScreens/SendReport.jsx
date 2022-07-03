import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Button, Text } from "react-native-paper";
import NextPrevButton from "../../Components/NextPrevButton";
import Screen from "../../Components/Screen";
import style from "../../config/style";
import { GlobalState } from "../../GlobalState/GlobalState";

import routes from "../../Navigations/routes";
import ReportMissing from "../../Hooks/ReportMissing";
import colors from "../../config/colors";

import LottieView from "lottie-react-native";

const SendReport = ({ navigation }) => {
  const { report, updateReport } = React.useContext(GlobalState);
  const { handleReport, loading } = ReportMissing();

  const [modalVisible, setModalVisible] = React.useState(false);

  const onReported = () => {
    setModalVisible(true);
  };

  return (
    <Screen>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View
          style={[
            styles.animContainer,
            { backgroundColor: colors.lightGray, height: "100%" },
          ]}
        >
          <LottieView
            onAnimationFinish={() => navigation.navigate(routes.FEED)}
            autoPlay
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/animation/done.json")}
          />
          <Button
            icon={"home"}
            loading={loading}
            mode="contained"
            style={style.button.style}
            contentStyle={style.button.contentStyle}
            onPress={() => navigation.navigate(routes.FEED)}
          >
            Home
          </Button>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.animContainer}>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/animation/exclamation.json")}
          />
        </View>
        <Text style={styles.headline}>
          You are about to report that a person with the information you
          provided is currently missing!
        </Text>
        <Button
          icon={"plus"}
          loading={loading}
          mode="contained"
          style={style.button.style}
          contentStyle={style.button.contentStyle}
          onPress={() => handleReport(report, onReported)}
        >
          Report
        </Button>

        <NextPrevButton prev={routes.MISSING_PERSON4} next={""} />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    height: "100%",
    justifyContent: "space-around",
  },
  headline: {
    fontSize: 30,
    color: colors.primary,
    textAlign: "center",
    paddingVertical: 10,
  },
  animContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: "100%",
    backgroundColor: colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SendReport;
