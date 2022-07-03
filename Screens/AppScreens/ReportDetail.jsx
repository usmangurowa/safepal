import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Title } from "react-native-paper";

import colors from "../../config/colors";

const ReportDetail = ({ route }) => {
  const {
    id,
    name,
    image,
    dob,
    age,
    height,
    description,
    skinColor,
    ethnicity,
    lastSeenDate,
    lastSeenState,
    lastSeenLGA,
    phone,
    email,
    contactAddress,
  } = route.params;

  console.log(dob);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.pic} source={{ uri: image }} />
        <View style={styles.info}>
          <Title>Personal information</Title>
          <Text style={styles.txt}>Name: {name}</Text>
          <Text style={styles.txt}>
            DOB: {new Date(dob.nanoseconds).toDateString()}
          </Text>
          <Text style={styles.txt}>Age: {age}</Text>
          <Text style={styles.txt}>Height: {height}</Text>
          <Text style={styles.txt}>Ethnicity: {ethnicity}</Text>
          <Text style={styles.txt}>Skin Color: {skinColor}</Text>
          <Text style={styles.txt}>Description: {description}</Text>
        </View>
        <View style={styles.info}>
          <Title>Last Seen information</Title>
          <Text style={styles.txt}>State: {lastSeenState}</Text>
          <Text style={styles.txt}>LGA: {lastSeenLGA}</Text>
          <Text style={styles.txt}>
            Date: {new Date(lastSeenDate.seconds).toDateString()}
          </Text>
        </View>
        <View style={styles.info}>
          <Title>Contact when this person is seen</Title>
          <Text style={styles.txt}>Phone: {phone}</Text>
          <Text style={styles.txt}>Email: {email}</Text>
          <Text style={styles.txt}>Address: {contactAddress}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.gray,
  },
  txt: {
    fontSize: 20,
  },
  info: {
    padding: 10,
  },
  pic: {
    height: 300,
    width: "100%",
  },
});
export default ReportDetail;
