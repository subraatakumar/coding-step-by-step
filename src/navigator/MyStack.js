import { Header, createStackNavigator } from "@react-navigation/stack";
import { Welcome, Home } from "../screens";
import app from "../util/constants";

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
        options={{ title: app.home_page_title }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
