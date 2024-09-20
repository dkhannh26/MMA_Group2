// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTrip from "./screens/MyTrip.js";
import UpdateTrip from "./screens/UpdateTrip.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewTrip from "./screens/AddNewTrip.js";
import { Button } from "@rneui/base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Add new trip"
          component={AddNewTrip}
          options={{
            title: "Plan a new trip",
            // // headerLeft: () => (
            // //   <HeaderBackButton
            // //     label="Hello"
            // //     onPress={() => console.log("back pressed")}
            // //   />
            // ),
          }}
        />
        <Stack.Screen name="MyTrip" component={MyTrip} />
        <Stack.Screen name="UpdateTrip" component={UpdateTrip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
