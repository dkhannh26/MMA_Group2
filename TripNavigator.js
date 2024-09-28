// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddNewTrip } from "./src/components/AddNewTrip.js/index.js";
import { MyTrip } from "./src/components/MyTrip.js";
import { UpdateTrip } from "./src/components/UpdateTrip.js/index.js";

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
