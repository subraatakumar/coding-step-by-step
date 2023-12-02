import { View, Text, Image, Dimensions, Platform } from "react-native";
import React from "react";

const ComingSoon = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2019/12/27/08/36/coming-soon-hour-glass-4721933_1280.png",
        }}
        style={{
          width: "100%",
          height: Platform.OS == "web" ? 600 : 300,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ComingSoon;
