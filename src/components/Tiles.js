import {
  ScrollView,
  View,
  Text,
  Platform,
  Pressable,
  FlatList,
} from "react-native";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "./Image";
import { getCourses } from "../apis";
import { getNumberOfColumns, getSingleTileWidth } from "../util";
import DeviceInfo from "react-native-device-info";

const TilesContext = createContext();

const Tiles = ({ handlePress }) => {
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

  useEffect(() => {
    DeviceInfo.isLandscape().then((isLandscape) => {
      setIsLandscape(isLandscape);
      setKey(`key-${noOfColumns}`);
    });
  });

  return (
    <TilesContext.Provider value={handlePress}>
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
    </TilesContext.Provider>
  );
};

export default Tiles;

const Tile = ({ data, style, singleTileWidth = 150 }) => {
  const handlePress = useContext(TilesContext);

  return (
    <Pressable
      onPress={() => handlePress(data.id, data.title)}
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
    </Pressable>
  );
};
