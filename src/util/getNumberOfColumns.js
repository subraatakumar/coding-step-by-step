import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

const getNumberOfColumns = (isLandscape) => {
  if (Platform.OS == "web") return 5;
  if (DeviceInfo.isTablet() && isLandscape) return 4;
  if (DeviceInfo.isTablet() || isLandscape) return 3;
  return 2;
};

export default getNumberOfColumns;
