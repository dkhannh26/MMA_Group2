import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { expenses } from "../../data";
const Tab = createMaterialTopTabNavigator();

export function Expenses() {
  return (
    <ScrollView style={styles.container}>
      {expenses?.map((expense, index) => (
        <View key={index}>
          <View style={styles.expense}>
            <Icon
              name={expense.icon.name}
              type={expense.icon.type}
              color="gray"
              containerStyle={styles.icon}
            />

            {/* <Image source={{ uri: plan.image }} style={styles.image} /> */}
            <View style={styles.text}>
              <Text style={styles.scheduleTitle}>{expense.title}</Text>
              <Text style={styles.scheduleSubtitle}>{expense.date}</Text>
            </View>
            <View style={styles.price}>
              <Text style={{ fontWeight: "bold" }}>{expense.price}</Text>
            </View>
          </View>

          <View style={styles.hr}></View>
        </View>
      ))}

      <Button
        title="Add Expenses"
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
    // backgroundColor: "black",
    // borderRadius: 5,
    // marginHorizontal: "5%",
    // marginVertical: 5,
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: "24%",
    paddingVertical: 12,
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
