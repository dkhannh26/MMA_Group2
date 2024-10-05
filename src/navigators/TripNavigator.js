// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewTrip from "../components/AddNewTrip.js";
import MyTrip from "../components/MyTrip.js";
import UpdateTrip from "../components/UpdateTrip.js";
import { Icon } from "@rneui/themed";

const Stack = createNativeStackNavigator();

export default function TripNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MyTrips"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            type="ionicon"
            name="chevron-back-outline"
            size={24}
            color="black"
            containerStyle={{
              borderRadius: 50,
              backgroundColor: "#f3f3f4",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()} // Điều khiển hành động nút Back
          />
        ),
        headerTitleAlign: "center",
      })}
    >
      <Stack.Screen name="My Trips" component={MyTrip} />
      <Stack.Screen
        name="Add new trip"
        component={AddNewTrip}
        options={{ title: "Plan a new trip" }}
      />
      <Stack.Screen name="Trip Detail Plan" component={UpdateTrip} />
    </Stack.Navigator>
  );
}
