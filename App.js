import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "./src/screens";
import { MarkdownReader } from "./src/components";

export default function App() {
  return (
    <View style={styles.container}>
      <MarkdownReader
        username="subrataindia"
        repo="dsa-javascript"
        branch="main"
        file="subratsir/dsa/diff-linear-binary-search.md"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
