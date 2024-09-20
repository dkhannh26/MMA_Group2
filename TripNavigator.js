// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddNewTrip } from "./screens/AddNewTrip.js";
import { MyTrip } from "./screens/MyTrip.js";
import { UpdateTrip } from "./screens/UpdateTrip.js";

const Stack = createNativeStackNavigator();

export default function TripNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddNewTrip" component={AddNewTrip} />
        <Stack.Screen name="MyTrip" component={MyTrip} />
        <Stack.Screen name="UpdateTrip" component={UpdateTrip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
