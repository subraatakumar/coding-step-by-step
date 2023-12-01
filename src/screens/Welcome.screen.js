import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import LottieView from "lottie-react-native";
import { LottieView as LottieViewWeb } from "@bounceapp/lottie";
import MyButton from "../components/MyButton";

const Welcome = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.replace("Home");
  };
  return (
    <View style={styles.container}>
      {Platform.OS === "web" ? (
        <LottieViewWeb
          source={require("../assets/lottie/step-by-step.json")}
          autoPlay
          loop
        />
      ) : (
        <LottieView
          source={require("../assets/lottie/step-by-step.json")}
          autoPlay
          loop
          style={{ width: 250, height: 250 }}
        />
      )}
      <Text>Hi! 👋</Text>
      <Text>Welcome To CodingStepByStep</Text>
      <Text>Keep Learning Keep Growing</Text>
      <MyButton
        title="Start Learning"
        onPress={navigateToHome}
        style={{ marginTop: 20 }}
      />
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
