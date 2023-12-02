import { Header, createStackNavigator } from "@react-navigation/stack";
import { Welcome, Home, CourseLanding } from "../screens";
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
      <Stack.Screen
        name="CourseLanding"
        component={CourseLanding}
        options={{ title: "Course Landing Page" }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
