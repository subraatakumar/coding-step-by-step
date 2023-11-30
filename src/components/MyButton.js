import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ title, onPress = null }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{title}</Text>
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
