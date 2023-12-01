import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Image as SvgImage, SvgUri } from "react-native-svg";
import Image from "./Image";

const Tiles = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image uri="https://reactnative.dev/img/header_logo.svg" />
        {/* <Svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          style={{ width: 200, height: 100 }}
        >
          <SvgImage
            href={{ uri: "https://reactnative.dev/img/header_logo.svg" }}
            width="100%"
            height="100%"
          />
        </Svg> */}
        <Text>Full Stack React Native</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tiles;
