import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/lottie/step-by-step.json")}
        autoPlay
        loop
      />
      <Text>Hi! 👋</Text>
      <Text>Welcome To CodingStepByStep</Text>
      <Text>Keep Learning Keep Growing</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
