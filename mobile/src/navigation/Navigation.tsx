import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/HomeScreen";
import { FormScreen } from "../screen/FormScreen";
import { LoginScreen } from "../screen/LoginScreen";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
    </Stack.Navigator>
  );
};
