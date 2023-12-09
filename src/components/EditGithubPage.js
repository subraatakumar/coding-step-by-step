import React, { useCallback } from "react";
import { View, Linking } from "react-native";
import { Foundation } from "@expo/vector-icons";

const EditGithubPage = ({ url }) => {
  const handleClick = useCallback(() => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  }, []);

  return (
    <View>
      <Foundation.Button
        name="page-edit"
        onPress={handleClick}
        backgroundColor={"#b5b5b5"}
        color={"#000"}
      >
        Edit This Page
      </Foundation.Button>
    </View>
  );
};

export default EditGithubPage;
