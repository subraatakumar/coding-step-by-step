import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import getContents from "../apis/getContents";
import { redirectToContent } from "../util";

const CourseContent = () => {
  const params = useRoute()?.params;
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let x = await getContents(params?.id);
        console.log(x);
        setContentData(x.data);
      } catch (e) {
        console.log("Unable to get contents!");
      }
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={contentData}
        renderItem={({ item }) => <SingleCourseContent item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CourseContent;

const SingleCourseContent = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    redirectToContent(navigation, item);
  });
  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.itemContainer}>{item?.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});
