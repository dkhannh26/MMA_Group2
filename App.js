// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTrip from "./src/components/MyTrip.js";
import UpdateTrip from "./src/components/UpdateTrip.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewTrip from "./src/components/AddNewTrip.js";
import { Button, Icon } from "@rneui/base";
import TripNavigator from "./src/navigators/TripNavigator.js";
import { SafeAreaView } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TripNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
