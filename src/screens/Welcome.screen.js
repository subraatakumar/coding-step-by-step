import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Platform, Button } from "react-native";
import LottieView from "lottie-react-native";
import { LottieView as LottieViewWeb } from "@bounceapp/lottie";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  const navigateToHome = useCallback(() => {
    Platform.OS === "web"
      ? navigation.navigate("Home")
      : navigation.replace("Home");
  }, [navigation]);

  useEffect(() => {
    const delayNavigation = setTimeout(() => {
      if (Platform.OS == "web") {
        navigateToHome();
      }
    }, 5000); // Adjust the delay time as needed

    return () => clearTimeout(delayNavigation); // Cleanup the timer on component unmount
  }, [navigation]);

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
      {Platform.OS != "web" && (
        <MyButton
          title="Start Learning"
          onPress={navigateToHome}
          style={{ marginTop: 20 }}
        />
      )}
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
