import { Text } from "react-native";
import SplashScreen from "@pages/SplashScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YourRole from '@pages/YourRole'
import Home from '@pages/Home'

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="YourRole" component={YourRole} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
