import React, { useCallback } from "react";
import { Linking } from "react-native";
import MyButton from "./MyButton";

const EditGithubPage = ({ url }) => {
  const handleClick = useCallback(() => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  }, []);

  return (
    // <Pressable onPress={handleClick}>
    //   <Text>Edit This Page</Text>
    // </Pressable>
    <MyButton onPress={handleClick} title={"Edit this page"} />
  );
};

export default EditGithubPage;
