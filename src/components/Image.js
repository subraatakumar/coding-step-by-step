import { Platform, Image } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

const MyImage = ({
  uri,
  width = 150,
  height = 150,
  resizeMode = "contain",
}) => {
  if (
    Platform.OS == "web" ||
    uri.trim().split(".").reverse()[0].toUpperCase() != "SVG"
  ) {
    return (
      <Image
        source={{ uri: uri }}
        style={{ width: width, height: height, resizeMode: resizeMode }}
      />
    );
  } else {
    return <SvgUri width={width} height={height} uri={uri} />;
  }
};

export default MyImage;
