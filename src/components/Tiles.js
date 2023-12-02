import { ScrollView, View, Text, Platform } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Image from "./Image";
import { getCourses } from "../apis";
import { getNumberOfColumns, getSingleTileWidth } from "../util";
import DeviceInfo from "react-native-device-info";

const Tiles = () => {
  const [data, setData] = useState([]);
  const [isLandscape, setIsLandscape] = useState(false);
  const [key, setKey] = useState("key-1"); // Initialize with a default key

  const noOfColumns = getNumberOfColumns(isLandscape);
  const singleTileWidth = getSingleTileWidth(isLandscape);

  const getCoursesList = useCallback(async () => {
    const result = await getCourses();
    if (result.isSuccess) {
      setData(result.data);
    }
  }, []);

  useEffect(() => {
    getCoursesList();
  }, []);

  DeviceInfo.isLandscape().then((isLandscape) => {
    setIsLandscape(isLandscape);
    setKey(`key-${noOfColumns}`);
  });

  // useEffect(() => {
  //   noOfColumns = getNumberOfColumns();
  // }, [isLandscape]);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Tile data={item} singleTileWidth={singleTileWidth} />
        )}
        numColumns={noOfColumns}
        keyExtractor={(item, index) => index.toString()}
        key={noOfColumns.toString()}
      />
    </View>
  );
};

export default Tiles;

const Tile = ({ data, style, singleTileWidth = 150 }) => {
  return (
    <View
      style={{
        width: singleTileWidth,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        margin: "2%",
        padding: 10,
        ...style,
      }}
    >
      <TouchableOpacity>
        <Image uri={data.thumbnail} width="100%" />
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            elevation: 5,
            fontWeight: "bold",
          }}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
