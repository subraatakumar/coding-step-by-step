import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "./src/screens";
import { MarkdownReader } from "./src/components";
import MyApp from "./src/App";

export default function App() {
  return (
    <View style={styles.container}>
      <MyApp />
      {/* <Welcome /> */}
      {/* <View style={{ alignItems: "center", flex: 1 }}>
        <YoutubeIframe
          height={300}
          width={300}
          play={true}
          videoId={"iee2TATGMyI"}
        />
      </View> */}

      {/* <MarkdownReader
        username="subrataindia"
        repo="dsa-javascript"
        branch="main"
        file="subratsir/dsa/diff-linear-binary-search.md"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
