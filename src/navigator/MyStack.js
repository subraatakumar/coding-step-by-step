import { Header, createStackNavigator } from "@react-navigation/stack";
import { Welcome, Home } from "../screens";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Coding Step By Step" }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
