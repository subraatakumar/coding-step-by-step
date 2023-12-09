import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MarkdownReader } from "../components";

const SinglePost = () => {
  const params = useRoute()?.params;
  console.log(params);
  return (
    <View style={{ flex: 1 }}>
      {params.type == "github" && <MarkdownReader {...params} />}
    </View>
  );
};

export default SinglePost;
