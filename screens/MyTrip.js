import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Input, Icon, Overlay, ListItem } from "@rneui/themed";
import { Button } from "@rneui/base";
import tailwind from "tailwind-rn";
import { Calendar } from "react-native-calendars";

export default function MyTrip() {
  return (
    <View>
      <Text>TEST</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  pl10: {
    paddingLeft: 10,
  },
  overlay: {
    position: "absolute",

    bottom: 0,
    width: "100%",
    maxHeight: "80%", // Limit height to prevent overflow
    // padding: 10,
    borderRadius: 10,
    backgroundColor: "white", // Background color to ensure touchability
  },
});
