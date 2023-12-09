import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import React, { useCallback } from "react";

const Author = ({ authorName, authorUrl, authorImage }) => {
  const handlePress = useCallback(() => {
    if (Linking.canOpenURL(authorUrl)) {
      Linking.openURL(authorUrl);
    }
  }, [authorUrl]);
  return (
    <View>
      <Pressable onPress={handlePress}>
        <View style={styles.authorContainer}>
          <Image source={{ uri: authorImage }} style={styles.authorImage} />
          <View style={styles.authorTextContainer}>
            <Text>Credit:</Text>
            <Text style={styles.authorName}>{authorName}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Author;

const styles = StyleSheet.create({
  authorContainer: {
    flexDirection: "row",
  },
  authorTextContainer: {
    justifyContent: "center",
  },
  authorImage: {
    borderRadius: 25,
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  authorName: {
    fontWeight: "bold",
  },
});
