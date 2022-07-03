import React from "react";

import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Title, Paragraph, Headline, Text } from "react-native-paper";
import colors from "../../config/colors";

const CardItem = ({ item, onPress }) => {
  const {
    name,
    description,
    image = "https://picsum.photos/697",
    status,
  } = item;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ zIndex: 1001 }}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.body}>
          <View>
            <Title numberOfLines={1}>{name}</Title>
            <Text numberOfLines={1}>{description}</Text>
          </View>
          <View>
            <Text>Status: {status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    margin: 5,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  body: {
    marginHorizontal: 10,
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
  },
});
export default CardItem;
