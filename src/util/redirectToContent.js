import { useNavigation } from "@react-navigation/native";

const redirectToContent = (navigation, item) => {
  navigation.navigate("SinglePost", { ...item });
};

export default redirectToContent;
