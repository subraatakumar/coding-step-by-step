import React from "react";
import { View, Text, Button } from "react-native";
import Tiles from "../components/Tiles";

const Home = ({ navigation }) => {
  const handlePress = (id, title) => {
    navigation.navigate("CourseLanding", { id, title });
  };
  return (
    <View>
      <Tiles handlePress={handlePress} />
    </View>
  );
};

export default Home;
