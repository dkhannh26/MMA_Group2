import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button, color } from "@rneui/base";
import { Icon } from "@rneui/themed";

export default function MyTrip({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ongoing Trip</Text>
      <View style={styles.tripCard}>
        <ImageBackground
          source={{
            uri: "https://media.istockphoto.com/id/517188688/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non.jpg?s=612x612&w=0&k=20&c=WWWaejSo6EWGZMZSK7QK6LCfwd0rL2KB3ImCX2VkW4A=",
          }}
          style={styles.image}
        >
          {/* Đảm bảo text được bọc trong <Text> */}
          <View style={styles.price}>
            <Icon
              style={styles.priceIcon}
              type="ionicon"
              name="wallet-outline"
            />
            <Text style={styles.priceText}>$1450</Text>
          </View>
        </ImageBackground>
        <View style={styles.tripInfo}>
          <View style={styles.tripType}>
            <Text style={styles.tripTypeText}>New Year Trip</Text>
            <Text style={styles.dayLeft}>3 more days</Text>
          </View>
          <View style={styles.location}>
            <Icon type="evilicon" name="location" />
            <Text style={styles.locationText}>Shillong, India</Text>
            <Text style={styles.people}>4 People</Text>
          </View>
        </View>
        <Button
          title="Add Update"
          onPress={() => navigation.navigate("Trip Detail Plan")}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
      <Text style={styles.header}>Recent Trip</Text>
      <View style={styles.tripRow}>
        <View style={styles.tripCard1}>
          <ImageBackground
            source={{
              uri: "https://media.istockphoto.com/id/1179412710/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non-tuy%E1%BB%87t-%C4%91%E1%BA%B9p-v%C3%A0-m%E1%BA%B7t-tr%E1%BB%9Di-m%E1%BB%8Dc.jpg?s=612x612&w=0&k=20&c=AyANbX0vxbDaP60RAaOqp8UmBdVL1C-wNbalVQaKzFg=",
            }}
            style={styles.image1}
          >
            <View style={styles.recent}>
              <Text style={styles.locationRecent}>Cox's Bazar Beach</Text>
              <Text style={styles.date}>2 months ago</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.tripCard1}>
          <ImageBackground
            source={{
              uri: "https://m.yodycdn.com/blog/phong-canh-dep-o-viet-nam-yody-vn-3.jpg",
            }}
            style={styles.image1}
          >
            <View style={styles.recent}>
              <Text style={styles.locationRecent}>Cox's Bazar Beach</Text>
              <Text style={styles.date}>2 months ago</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <Button
        title="Add New Trip"
        onPress={() => navigation.navigate("Add new trip")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8,
  },
  tripRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tripCard: {
    backgroundColor: "white",
    borderRadius: 10,
    // marginBottom: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  tripCard1: {
    backgroundColor: "white",
    borderRadius: 10,
    // marginBottom: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "48%",
  },
  image: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: "100%",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
  },
  priceText: {
    paddingLeft: 4,
    fontWeight: "bold",
    fontSize: 18,

    color: "#080e1e",
  },
  tripInfo: {
    padding: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginVertical: 5,
  },
  locationText: {
    fontSize: 12,
    color: "gray",
  },
  tripType: {
    flexDirection: "row",
    alignItems: "center",
  },
  tripTypeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  people: {
    fontSize: 15,
    color: "gray",
    position: "absolute",
    right: 0,
  },
  dayLeft: {
    color: "gray",
    fontSize: 15,
    position: "absolute",
    right: 0,
  },
  date: {
    paddingTop: 8,
    fontSize: 16,
    color: "gray",
  },
  locationRecent: {
    fontWeight: "bold",
  },
  recent: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
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
});
