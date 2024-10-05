import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Tab = createMaterialTopTabNavigator();

export function Statistics() {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
