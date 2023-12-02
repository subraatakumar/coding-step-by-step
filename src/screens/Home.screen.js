import React from "react";
import { View, Text, Button } from "react-native";
import Tiles from "../components/Tiles";

const Home = ({ navigation }) => {
  const handlePress = (id) => {
    navigation.navigate("CourseLanding", { id });
  };
  return (
    <View>
      <Tiles handlePress={handlePress} />
    </View>
  );
};

export default Home;
