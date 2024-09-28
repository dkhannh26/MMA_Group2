// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTrip from "./src/components/MyTrip.js";
import UpdateTrip from "./src/components/UpdateTrip.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewTrip from "./src/components/AddNewTrip.js";
import { Button, Icon } from "@rneui/base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyTrips"
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              type="ionicon"
              name="chevron-back-outline"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // Điều khiển hành động nút Back
            />
          ),
        })}
      >
        <Stack.Screen name="My Trips" component={MyTrip} />
        <Stack.Screen name="Add new trip" component={AddNewTrip} />
        <Stack.Screen name="Trip Detail Plan" component={UpdateTrip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
