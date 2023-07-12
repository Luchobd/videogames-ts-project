
import { StyleSheet } from "react-native";
import GameProvider from "./src/context/videogame/State";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screen/HomeScreen";
import { Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
