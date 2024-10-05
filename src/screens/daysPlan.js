import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button } from "@rneui/base";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { dates, plans } from "../../data";
const Tab = createMaterialTopTabNavigator();

export function DaysPlan() {
  const [active, isActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState("04");

  const handleDatePress = (date) => {
    // console.log(date);

    setSelectedDate(date);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>January 2024</Text>
      <View style={styles.dateSelector}>
        {dates.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dateItem,
              selectedDate === item.date && styles.activeDateItem, // Apply active style when selected
            ]}
            onPress={() => handleDatePress(item.date)} // Set selected date
          >
            <Text
              style={{
                color: selectedDate === item.date ? "white" : "gray",
              }}
            >
              {item.day}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                paddingTop: 8,
                color: selectedDate === item.date ? "white" : "black",
              }}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {plans[selectedDate]?.map((plan, index) => (
        <View key={index} style={styles.scheduleItem}>
          <View
            style={plan.active === true ? styles.sideActive : styles.side}
          ></View>
          <Image source={{ uri: plan.image }} style={styles.image} />
          <View style={styles.text}>
            <Text style={styles.scheduleTitle}>{plan.title}</Text>
            <Text style={styles.scheduleSubtitle}>{plan.subtitle}</Text>
            <Text style={styles.scheduleTime}>{plan.time}</Text>
          </View>
        </View>
      ))}

      <Button
        title="Add New Plan"
        // onPress={() => navigation.navigate("My Trips")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </ScrollView>
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
    marginBottom: "4%",
  },
  activeDateItem: {
    backgroundColor: "#ff361d", // Active background color
    borderRadius: 20,
    width: "10%",
  },
  dateItem: {
    alignItems: "center",
    paddingHorizontal: "1.5%",
    paddingVertical: "2.5%",
  },
  scheduleItem: {
    marginBottom: "4%",
    padding: "4.5%",
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
    // marginTop: "5%",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: "19%",
    paddingVertical: 12,
  },
  buttonText: {
    color: "white",
    marginHorizontal: 20,
  },
  image: {
    width: "20%",
    height: "150%",
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
    height: "150%",
  },
  sideActive: {
    width: "2%",
    backgroundColor: "#ff361d",
    borderRadius: 10,
    marginRight: "5%",
    height: "150%",
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
