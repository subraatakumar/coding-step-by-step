import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ title, onPress = null, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...style }}>
      <Text
        style={{
          ...styles.btnText,
          color: style.color || styles.btnText.color,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#33adff",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  btnText: {
    textAlign: "center",
    color: "#FFF",
  },
});
