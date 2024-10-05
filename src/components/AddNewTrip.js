import { Button } from "@rneui/base";
import { Icon, Input, ListItem, Overlay } from "@rneui/themed";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import tailwind from "tailwind-rn";
import { data } from "../../data";
export default function AddNewTrip({ navigation }) {
  const [value, setValue] = useState(0);
  const [isOverlayVisibleLocation, setOverlayVisibleLocation] = useState(false);
  const [isOverlayVisibleCalendar, setOverlayVisibleCalendar] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [isPress, setPress] = useState(false);
  const [isChoose, setChoose] = useState("");

  const onDayPress = (day) => {
    const dateString = day.dateString;
    const selectedDates = Object.keys(markedDates);

    // Check if the clicked date is already selected
    if (markedDates[dateString]) {
      const updatedMarkedDates = { ...markedDates };
      delete updatedMarkedDates[dateString]; // Remove selected date
      setMarkedDates(updatedMarkedDates);
    } else {
      // Check if less than 2 dates are selected
      if (selectedDates.length < 2) {
        const updatedMarkedDates = {
          ...markedDates,
          [dateString]: {
            selected: true,
            color: "#f2613c",
            // borderRadius: 10,
          },
        };
        setMarkedDates(updatedMarkedDates);
      } else {
        // Show alert if already 2 dates are selected
        alert("Selection Limit Reached", "You can only select up to 2 dates.");
      }
    }
  };

  const formatDate = () => {
    const dates = Object.keys(markedDates);
    if (dates.length < 2) {
      return "";
    }
    const [start, end] = dates;

    const startDate = format(parseISO(start), "EEE, d MMM");
    const endDate = format(parseISO(end), "EEE, d MMM");
    // console.log(startDate + " " + endDate);
    if (new Date(start) - new Date(end) < 0) {
      return `${startDate} to ${endDate}`;
    } else {
      return `${endDate} to ${startDate}`;
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchQuery(text);

    const filterItems = data.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    // console.log("filter items:"+filterItems);

    setFilteredData(filterItems);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setOverlayVisibleLocation(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // paddingTop: 10,
        }}
      >
        <Icon
          style={{ paddingTop: 50, paddingBottom: 20 }}
          color={"#2089dc"}
          type="font-awesome-5"
          name="plane-departure"
          size={28}
        />
      </View>
      {/* tailwind("font-black px-4 text-2xl	text-center	") */}
      <Text
        style={{
          color: "black",
          paddingHorizontal: 24,
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Let's Get Start Plan {"\n"} A New Trip
      </Text>
      <View>
        <View>
          <Text style={styles.text}>Where to?</Text>
          <Input
            inputContainerStyle={styles.input}
            placeholder="type location"
            value={isChoose}
            leftIcon={{
              type: "ionicon",
              name: "location-sharp",
              size: 17,
              paddingLeft: 8,
            }}
            containerStyle={{ paddingLeft: 15 }}
            onPress={() => {
              setOverlayVisibleLocation(true);
            }}
          />
          <Overlay
            isVisible={isOverlayVisibleLocation}
            onBackdropPress={() => setOverlayVisibleLocation(false)}
            overlayStyle={styles.overlay}
          >
            <Text style={styles.textHeader}>Where To?</Text>
            <Input
              inputContainerStyle={styles.input}
              leftIcon={{
                type: "ionicon",
                name: "search-outline",
                color: "grey",
              }}
              placeholder="e.g., Paris, Hawaii, Japan"
              value={searchQuery}
              onChangeText={handleSearch}
            />

            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ListItem>
                  <Icon name="search-outline" type="ionicon" color="grey" />
                  <ListItem.Content>
                    <ListItem.Title
                      onPress={() => {
                        setOverlayVisibleLocation(false);
                        setChoose(item.title);
                      }}
                    >
                      {item.title}{" "}
                      <Text style={{ fontWeight: "bold" }}>{item.city}</Text>
                    </ListItem.Title>
                  </ListItem.Content>
                  {/* <ListItem.Chevron /> */}
                </ListItem>
              )}
            />
          </Overlay>
        </View>
        <Text style={styles.text}>Trip date</Text>
        <Input
          inputContainerStyle={styles.input}
          value={isPress ? formatDate() : ""}
          placeholder="set date"
          leftIcon={{
            type: "font-awesome",
            name: "calendar",
            size: 17,
            paddingLeft: 8,
          }}
          containerStyle={{ paddingLeft: 15 }}
          onPress={() => {
            setOverlayVisibleCalendar(true);
          }}
        />
        <Overlay
          isVisible={isOverlayVisibleCalendar}
          onBackdropPress={() => setOverlayVisibleCalendar(false)}
          // style={styles.overlay}
          overlayStyle={styles.overlayCalendar}
        >
          <Text style={styles.textHeaderDate}>When's Your Trips?</Text>
          <Calendar
            markingType={"period"}
            markedDates={markedDates}
            onDayPress={onDayPress}
            theme={{
              textSectionTitleColor: "black",
              textMonthFontWeight: "bold",
            }}
          />
          <Button
            title="Confirm"
            buttonStyle={{
              backgroundColor: "rgba(39, 39, 39, 1)",
              justifyContent: "center", // Căn giữa nội dung theo chiều dọc
              alignItems: "center",
            }}
            containerStyle={{
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
            titleStyle={{
              color: "white",
              marginHorizontal: 20,
              textAlign: "center", // Căn giữa text bên trong button
            }}
            onPress={() => {
              if (Object.keys(markedDates).length != 2) {
                alert("Please choose start date and end date");
              } else {
                setPress(true);
                setOverlayVisibleCalendar(false);
              }
              // console.log(Object.keys(markedDates));
            }}
          />
        </Overlay>
        <Text style={styles.text}>Add guest list</Text>
        {/* <View style={styles.container}> */}
        {/* <Button title="-" onPress={decrement} /> */}
        <Input
          // multiline={true}
          inputContainerStyle={styles.input}
          containerStyle={{ paddingLeft: 15 }}
          rightIcon={{
            type: "ionic",
            name: "add-circle-outline",
            onPress: () => {
              if (value < 99) setValue(value + 1);
            },

            marginRight: 80,
          }}
          leftIcon={{
            type: "ionic",
            name: "remove-circle-outline",
            onPress: () => {
              if (value > 0) {
                setValue(value - 1);
              }
            },

            marginLeft: 8,
          }}
          rightIconContainerStyle={{
            paddingRight: 250,
          }}
          value={String(value)}
          keyboardType="numeric"
          onChangeText={(text) => setValue(Number(text))}
        />
        {/* <Button title="+" onPress={increment} /> */}
        {/* </View> */}
        <Text style={styles.text}>Trip name</Text>
        <Input
          inputContainerStyle={styles.input}
          placeholder="type name"
          // leftIcon={<Icon name="user" size={24} color="black" />}
          leftIcon={{
            type: "material",
            name: "short-text",
            size: 17,
            paddingLeft: 8,
          }}
          containerStyle={{ paddingLeft: 15 }}
        />
      </View>

      <Button
        title="Let's Start your Plan"
        // onPress={() => navigation.navigate("My Trips")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: "6%",
    paddingVertical: 12,
  },
  buttonText: {
    color: "white",
    marginHorizontal: 20,
  },
  pl10: {
    paddingLeft: 10,
  },
  overlay: {
    position: "absolute",

    bottom: 0,
    width: "100%",
    minHeight: "70%", // Limit height to prevent overflow
    backgroundColor: "white", // Background color to ensure touchability
  },
  overlayCalendar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: "50%", // Limit height to prevent overflow
    backgroundColor: "white", // Background color to ensure touchability
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    // rounded-lg border-gray-700 border-2 pl-2
    borderRadius: 8,
    // borderColor: rgb(55, 65, 81),
    paddingLeft: 8,
    borderWidth: 1,
  },
  text: {
    // fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 10,
    marginLeft: 8,
  },
  textHeaderDate: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    marginLeft: 8,
  },
});