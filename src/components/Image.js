import { Platform, Image } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

const MyImage = ({ uri, width = 150, resizeMode = "cover", style = {} }) => {
  if (
    Platform.OS == "web" ||
    uri.trim().split(".").reverse()[0].toUpperCase() != "SVG"
  ) {
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
  } else {
    return (
      <SvgUri
        style={{
          width: width,
          aspectRatio: 1,
          borderRadius: 10,
          ...style,
        }}
        resizeMode={resizeMode}
        uri={uri}
      />
    );
  }
};

export default MyImage;
