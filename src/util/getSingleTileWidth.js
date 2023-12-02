import { Platform, useWindowDimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const getSingleTileWidth = (isLandscape) => {
  const { height, width } = useWindowDimensions();

  if (Platform.OS == "web") return Math.ceil((width * 0.8) / 5);
  if (DeviceInfo.isTablet() && isLandscape)
    return Math.ceil((width * 0.84) / 4);
  if (DeviceInfo.isTablet()) return Math.ceil((width * 0.88) / 3);
  if (isLandscape) return Math.ceil((width * 0.88) / 3);
  return Math.ceil((width * 0.92) / 2);
};

export default getSingleTileWidth;
