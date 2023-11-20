import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi! 👋</Text>
      <Text>Welcome To CodingStepByStep</Text>
      <Text>Keep Learning Keep Growing</Text>
      <Entypo name="rocket" size={30} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
