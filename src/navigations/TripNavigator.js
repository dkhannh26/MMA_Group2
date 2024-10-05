// In App.js in a new project

import * as React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewTrip from "../components/AddNewTrip.js";
import MyTrip from "../components/MyTrip.js";
import UpdateTrip from "../components/UpdateTrip.js";
import { Icon } from "@rneui/themed";
import AntDesign from '@expo/vector-icons/AntDesign';
const Stack = createNativeStackNavigator();

const CustomHeader = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, backgroundColor: 'white', paddingTop: 30 }}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={26} color="black"
          style={{ marginRight: 25 }}
        />
      </Pressable>
      <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', fontSize: 24 }}>
        Trip
      </Text>
    </View>
  );
};

export default function TripNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Trips" component={MyTrip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add new trip" component={AddNewTrip}
        options={{
          header: () => <CustomHeader></CustomHeader>
        }}
      />
      <Stack.Screen name="Trip Detail Plan" component={UpdateTrip}
        options={{
          header: () => <CustomHeader></CustomHeader>
        }}
      />
    </Stack.Navigator>

  );
}
