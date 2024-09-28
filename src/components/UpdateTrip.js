import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Input, Icon, Overlay, ListItem } from "@rneui/themed";
import { Button } from "@rneui/base";
import tailwind from "tailwind-rn";
import { Calendar } from "react-native-calendars";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

function DaysPlan() {
  const [active, isActive] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>January 2024</Text>
      <View style={styles.dateSelector}>
        {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"].map((day, index) => (
          <TouchableOpacity key={index} style={styles.dateItem}>
            <Text>{day}</Text>
            <Text>{index + 4}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.scheduleItem}>
        <ImageBackground
          source={{
            uri: "https://media.istockphoto.com/id/1179412710/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non-tuy%E1%BB%87t-%C4%91%E1%BA%B9p-v%C3%A0-m%E1%BA%B7t-tr%E1%BB%9Di-m%E1%BB%8Dc.jpg?s=612x612&w=0&k=20&c=AyANbX0vxbDaP60RAaOqp8UmBdVL1C-wNbalVQaKzFg=",
          }}
          style={styles.image}
        ></ImageBackground>
        <View>
          <Text style={styles.scheduleTitle}>Train Kolkata - Shillong</Text>
          <Text style={styles.scheduleSubtitle}>Travelling</Text>
          <Text style={styles.scheduleTime}>07:00 - 11:30 AM</Text>
        </View>
      </View>
      <View style={styles.scheduleItem}>
        <Text style={styles.scheduleTitle}>Hotel "Getway Shillong"</Text>
        <Text style={styles.scheduleSubtitle}>Stay</Text>
        <Text style={styles.scheduleTime}>11:50 - 2:30 PM</Text>
      </View>
      <View style={styles.scheduleItem}>
        <Text style={styles.scheduleTitle}>Dejavu Food Restaurant</Text>
        <Text style={styles.scheduleSubtitle}>Lunch</Text>
        <Text style={styles.scheduleTime}>03:00 - 04:30 PM</Text>
      </View>

      <Button
        title="Add New Plan"
        // onPress={() => navigation.navigate("My Trips")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </ScrollView>
  );
}
function Expenses() {
  return (
    <View>
      <Text>Expenses</Text>
    </View>
  );
}
function Statistics() {
  return (
    <View>
      <Text>Statistics</Text>
    </View>
  );
}

export default function UpdateTrip({ navigation }) {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: "transparent", // Set transparent background to not interfere with custom styles
          elevation: 0, // Remove shadow (Android)
          shadowOpacity: 0, // Remove shadow (iOS)
        },
        tabBarItemStyle: {
          // width: 120, // Set width of each tab
          marginHorizontal: 10, // Spacing between tabs
          borderRadius: 20, // Set border radius for each tab
          // backgroundColor: "#EFEEEE",
          overflow: "hidden", // Ensure the border radius is applied properly
        },
        tabBarActiveTintColor: "white",

        tabBarInactiveTintColor: "#919097",
        tabBarIndicatorStyle: {
          backgroundColor: "black", // Set the indicator color
          backfaceVisibility: "transparent",
          height: "100%", // Make indicator fill the whole tab for rounded effect
          borderRadius: 20, // Border radius to match tab item
        },
        tabBarPressColor: "#ff361d", // Press color effect
      }}
    >
      <Tab.Screen name="Days Plan" component={DaysPlan} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateItem: {
    alignItems: "center",
  },
  scheduleItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    flexDirection: "row",
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scheduleSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  scheduleTime: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    marginHorizontal: 20,
  },
  image: {
    width: "50%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
