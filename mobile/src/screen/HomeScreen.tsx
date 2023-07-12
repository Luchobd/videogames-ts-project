import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import GameContext from "../context/videogame/Context";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const { getVideogames, videogames } = useContext(GameContext);

  const videogamesArray = videogames.flat();

  const [games, setGames] = useState<any>(videogamesArray)


  useEffect(() => {
    getVideogames();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={videogamesArray}
        keyExtractor={(item) => item._id}
        // renderItem={({ item }) => <Image source={{ uri: item.background_image }} style={{ width: 100, height: 100 }}/>}
        numColumns={4}
      />
      {/* <Text>{JSON.stringify(videogamesArray, null, 2)}</Text> */}
    </SafeAreaView>
  );
};

/*
SafeAreaView // Para que no se vea la barra superior
*/
