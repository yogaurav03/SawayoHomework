import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar, Home, NewRequest } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NewRequest"
          component={NewRequest}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Calendar"
          component={Calendar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
