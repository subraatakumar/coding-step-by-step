// components/ReadmeViewer.js
import React, { useState, useEffect, useCallback } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import axios from "axios";
import ReactMarkdown from "react-native-marked";
import Author from "./Author";

const MarkdownReader = ({
  username,
  repo,
  branch,
  file,
  authorName = "",
  authorImage = "",
  authorUrl = "",
}) => {
  const [readme, setReadme] = useState(``);
  const [scrollY, setScrollY] = useState(0);

  console.log(scrollY);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${file}`
        );
        setReadme(response.data);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, [username, repo]);

  const handleScrolling = useCallback(
    (event) => {
      const { y } = event.nativeEvent.contentOffset;
      if (y < 500) {
        setScrollY(-Math.ceil(y / 5));
      }
    },
    [scrollY]
  );

  return (
    <View style={{ flex: 1 }}>
      <ReactMarkdown
        value={readme}
        flatListProps={{
          initialNumToRender: 8,
          onScroll: handleScrolling,
        }}
      />
      {authorName.length > 0 && scrollY < 50 && (
        <View
          style={{
            height: 60,
            justifyContent: "center",
            paddingLeft: 10,
            marginBottom: scrollY,
          }}
        >
          <Author
            authorImage={authorImage}
            authorName={authorName}
            authorUrl={authorUrl}
          />
        </View>
      )}
    </View>
  );
};

export default MarkdownReader;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
  },
});
