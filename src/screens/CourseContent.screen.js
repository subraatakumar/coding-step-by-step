import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CourseContent = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>CourseContent.screen</Text>
    </View>
  );
};

export default CourseContent;
