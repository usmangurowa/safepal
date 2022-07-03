import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../../config/colors";
import { Text } from "react-native-paper";

const DatePicker = ({ value = "", onChange, placeHolder, label, style }) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (value) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setOpen(true)}>
      <View style={[styles.container, style]}>
        <Text style={styles.subtitle}>{value ? label : ""}</Text>
        {value ? (
          <Text style={styles.text}>{value.toDateString()}</Text>
        ) : (
          <Text style={[styles.textGray, style.text]}>{label}</Text>
        )}

        {open && (
          <DateTimePicker
            mode="date"
            value={value ? value : new Date()}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={(event, value) => handleChange(value)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: colors.darkGray,
    borderRadius: 5,
    backgroundColor: colors.gray,
    padding: 10,
    // paddingVertical: 17,
  },
  text: {
    fontSize: 17,
  },
  textGray: {
    color: colors.darkGray,
    fontSize: 17,
  },
  subtitle: {
    fontSize: 10,
  },
});
export default DatePicker;
