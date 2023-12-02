import { Platform, Image } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

const MyImage = ({ uri, width = 150, resizeMode = "cover", style = {} }) => {
  return (
    <Image
      source={{ uri: uri }}
      style={{
        width: width,
        aspectRatio: 1,
        resizeMode: resizeMode,
        borderRadius: 10,
        ...style,
      }}
    />
  );
};

export default MyImage;
