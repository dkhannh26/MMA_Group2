import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Input, Icon, Overlay, ListItem } from "@rneui/themed";
import { Button } from "@rneui/base";
import tailwind from "tailwind-rn";
import { Calendar } from "react-native-calendars";

export default function AddNewTrip() {
  const [value, setValue] = useState(0);
  const [isOverlayVisibleLocation, setOverlayVisibleLocation] = useState(false);
  const [isOverlayVisibleCalendar, setOverlayVisibleCalendar] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [isPress, setPress] = useState(false);
  const [isChoose, setChoose] = useState("");

  // Sample data for the list
  const data = [
    { id: "1", title: "Can Tho", subtitle: "Description for Item 1" },
    { id: "2", title: "Tra Vinh", subtitle: "Description for Item 2" },
    { id: "3", title: "Soc Trang", subtitle: "Description for Item 3" },
    { id: "4", title: "Ca Mau", subtitle: "Description for Item 4" },
    { id: "5", title: "Sai Gon", subtitle: "Description for Item 5" },
    { id: "6", title: "Bac Lieu", subtitle: "Description for Item 6" },
  ];

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
            borderRadius: 10,
          },
        };
        setMarkedDates(updatedMarkedDates);
      } else {
        // Show alert if already 2 dates are selected
        alert("Selection Limit Reached", "You can only select up to 2 dates.");
      }
    }
  };

  // const formatDateRange = () => {
  //   const dates = Object.keys(markedDates);
  //   if (dates.length < 2) {
  //     return "";
  //   }
  //   const [start, end] = dates;
  //   const startDate = format(parseISO(start), "EEE d MMM");
  //   const endDate = format(parseISO(end), "EEE d MMM");
  //   return `${startDate} to ${endDate}`;
  // };

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
    <View>
      {/* <View style={tailwind("flex-row items-center pt-6")}>
        <Icon
          type="material"
          name="arrow-back-ios"
          // size={35}
          style={tailwind("pl-5")}
        />
        <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
          <Text style={tailwind("text-lg")}>Plan a new trip</Text>
        </View>
        <View style={{ width: 35 }} />
      </View> */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // paddingTop: 10,
        }}
      >
        <Icon
          style={{ paddingTop: 30 }}
          color={"#2089dc"}
          type="font-awesome-5"
          name="plane-departure"
        />
      </View>
      <Text style={tailwind("font-black px-4 py-4 text-2xl	text-center	")}>
        Let's Get Start Plan A New Trip
      </Text>
      <View>
        <View>
          <Text style={tailwind("pl-2")}>Where to</Text>
          <Input
            inputContainerStyle={tailwind(
              "rounded-lg border-gray-700 border-2 border-green-800	"
            )}
            placeholder="type location"
            value={isChoose}
            leftIcon={{
              type: "feather",
              name: "map-pin",
              size: 17,
              paddingLeft: 8,
            }}
            onPress={() => {
              setOverlayVisibleLocation(true);
            }}
          />
          <Overlay
            style={styles.overlay}
            isVisible={isOverlayVisibleLocation}
            onBackdropPress={() => setOverlayVisibleLocation(false)}
            overlayStyle={styles.overlay}
          >
            <Text>Where To?</Text>
            <Input
              inputContainerStyle={tailwind(
                "rounded-lg border-gray-700 border-2 border-green-800	"
              )}
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
                      {item.title}
                    </ListItem.Title>
                  </ListItem.Content>
                  {/* <ListItem.Chevron /> */}
                </ListItem>
              )}
            />
          </Overlay>
        </View>
        <Text style={tailwind("pl-2")}>Trip date</Text>
        <Input
          inputContainerStyle={tailwind(
            "rounded-lg border-gray-700 border-2 border-green-800	"
          )}
          value={
            !isPress
              ? ""
              : new Date(Object.keys(markedDates)[0]) -
                  new Date(Object.keys(markedDates)[1]) <
                0
              ? Object.keys(markedDates)[0] +
                " to " +
                Object.keys(markedDates)[1]
              : Object.keys(markedDates)[1] +
                " to " +
                Object.keys(markedDates)[0]
          }
          placeholder="set date"
          leftIcon={{
            type: "font-awesome",
            name: "calendar",
            size: 17,
            paddingLeft: 8,
          }}
          onPress={() => {
            setOverlayVisibleCalendar(true);
          }}
        />
        <Overlay
          isVisible={isOverlayVisibleCalendar}
          onBackdropPress={() => setOverlayVisibleCalendar(false)}
          // style={styles.overlay}
          overlayStyle={styles.overlay}
        >
          <Calendar
            markingType={"period"}
            markedDates={markedDates}
            onDayPress={onDayPress}
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
        <Text style={tailwind("pl-2")}>Add guest list</Text>
        {/* <View style={styles.container}> */}
        {/* <Button title="-" onPress={decrement} /> */}
        <Input
          // multiline={true}
          inputContainerStyle={tailwind(
            "rounded-lg border-gray-700 border-2 border-green-800	"
          )}
          rightIcon={{
            type: "ionic",
            name: "add-circle-outline",
            onPress: () => {
              setValue(value + 1);
            },

            paddingLeft: 8,
          }}
          leftIcon={{
            type: "ionic",
            name: "remove-circle-outline",
            onPress: () => {
              if (value > 0) {
                setValue(value - 1);
              }
            },

            paddingLeft: 8,
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
        <Text style={tailwind("pl-2")}>Trip name</Text>
        <Input
          inputContainerStyle={tailwind(
            "rounded-lg border-gray-700 border-2 pl-2"
          )}
          placeholder="type name"
          // leftIcon={<Icon name="user" size={24} color="black" />}
        />
      </View>
      <Button
        title="Let's Start your Plan"
        buttonStyle={{
          backgroundColor: "rgba(39, 39, 39, 1)",
          justifyContent: "center", // Căn giữa nội dung theo chiều dọc
          alignItems: "center", // Căn giữa nội dung theo chiều ngang
        }}
        containerStyle={{
          justifyContent: "center", // Căn giữa container theo chiều dọc
          alignItems: "center", // Căn giữa container theo chiều ngang
        }}
        titleStyle={{
          color: "white",
          marginHorizontal: 20,
          textAlign: "center", // Căn giữa text bên trong button
        }}
      />
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
    minHeight: "80%", // Limit height to prevent overflow
    // padding: 10,
    borderRadius: 10,
    backgroundColor: "white", // Background color to ensure touchability
  },
});
