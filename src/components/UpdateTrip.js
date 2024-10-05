import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import { Input, Icon, Overlay, ListItem } from "@rneui/themed";
import { Button } from "@rneui/base";
import tailwind from "tailwind-rn";
import { Calendar } from "react-native-calendars";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { plans, dates, expenses } from "../../data";
const Tab = createMaterialTopTabNavigator();
import { Expenses } from "../screens/expenses";
import { DaysPlan } from "../screens/daysPlan";
import { Statistics } from "../screens/statistics";
export default function UpdateTrip({ navigation }) {
  return (
    // <NavigationContainer>

    <Tab.Navigator
      style={styles.container}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 11, fontWeight: "bold" },
        tabBarStyle: {
          paddingVertical: 20,
          marginHorizontal: "3%",
          backgroundColor: "#FFFFFF",
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
          height: "50%", // Make indicator fill the whole tab for rounded effect
          borderRadius: 20, // Border radius to match tab item
          marginBottom: "25%",
        },
        // tabBarPressColor: "#ff361d", // Press color effect
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
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
  },
  date: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dateSelector: {
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  activeDateItem: {
    backgroundColor: "#ff361d", // Active background color
    borderRadius: 20,
  },
  dateItem: {
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
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
    // color: "#555",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    marginHorizontal: "5%",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    marginHorizontal: 20,
  },
  image: {
    width: "20%",
    height: "120%",
    borderRadius: 10,
  },
  text: {
    paddingLeft: 10,
  },

  side: {
    width: "2%",
    backgroundColor: "black",
    borderRadius: 10,
    marginRight: "5%",
    height: "120%",
  },
  sideActive: {
    width: "2%",
    backgroundColor: "#ff361d",
    borderRadius: 10,
    marginRight: "5%",
    height: "120%",
  },
  expense: {
    // marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    flexDirection: "row",
  },
  hr: {
    borderBottomColor: "#efeeee", // Màu của đường kẻ ngang
    borderBottomWidth: 1, // Độ dày của đường kẻ ngang
    // marginVertical: 10, // Khoảng cách giữa các thành phần trên và dưới
  },
  price: {
    position: "absolute",
    right: "10%",
    top: "50%",
  },
  icon: {
    // position: "absolute",
    // left: "10%",
    // top: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#efeeee",
    height: 40,
    width: 40,
  },
});