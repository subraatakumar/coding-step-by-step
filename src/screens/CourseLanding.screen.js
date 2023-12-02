import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getLandingPage } from "../apis";
import { MarkdownReader } from "../components";

const CourseLanding = () => {
  const params = useRoute().params;
  const [landingPageData, setLandingPageData] = useState({});

  //   console.log("Course Landing Page Params:");
  //   console.log(params);
  //   console.log("Course landing page data:");
  //   console.log(landingPageData);

  useEffect(() => {
    const getData = async (id) => {
      const result = await getLandingPage(id);
      if (result.isSuccess) {
        setLandingPageData((prev) => {
          return { ...result.data };
        });
      }
    };
    getData(params?.id);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {Object.keys(landingPageData).length > 0 ? (
        <MarkdownReader
          username={landingPageData.username}
          repo={landingPageData.repo}
          branch={landingPageData.branch}
          file={landingPageData.file}
        />
      ) : (
        <Text>Comming Soon...</Text>
      )}
    </View>
  );
};

export default CourseLanding;
