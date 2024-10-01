import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Profile({ navigation }) {

  const [useName, setUserName] = useState("DOTAI GROUP");
  const [career, setcareer] = useState("UI UX Designer");
  const [showAlert, setShowAlert] = useState(false);

  // const { navigation } = props;
  const profileFeatures = [
    {
      id: 1,
      icon: <AntDesign name="setting" size={20} color="black" />,
      featureName: "Settings",
      navigate: "Setting"
    },
    // {
    //     id: 2,
    //     icon: "star",
    //     featureName: "Pro Membership"
    // },
    {
      id: 3,
      icon: <MaterialCommunityIcons name="information-variant" size={20} color="black" />,
      featureName: "Help",
      navigate: "Help"
    },
    {
      id: 4,
      icon: <Feather name="phone-call" size={20} color="black" />,
      featureName: "Feedback & Support",
      navigate: "Feedback"
    },
    // {
    //     id: 5,
    //     icon: "log-out",
    //     featureName: "Logout",
    // }
  ]

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
                <AntDesign name="left" size={20} color="black" style={[styles.backBtn, styles.icon]} />
                <Text style={styles.headerText}>Profile</Text>
            </View> */}

      <View>
        {/* profile info */}
        <View style={{
          margin: "auto",
          position: "relative",
          marginBottom: 15
        }}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg' }}
          />
          <Pressable
            onPress={() => navigation.navigate("Edit")}
            style={styles.editBtn}>
            <FontAwesome5 name="pen" size={10} color="black" />
          </Pressable>
        </View>
        <Text style={styles.name}>{useName}</Text>
        <Text style={styles.career}>{career}</Text>
      </View>

      <FlatList
        style={styles.featureList}
        data={profileFeatures}
        keyExtractor={item => item.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={[styles.rowCenter, styles.featureItem]}
              onPress={() => navigation.navigate(item.navigate)}
            >
              <View style={styles.rowCenter}>
                <View style={styles.icon}>{item.icon}</View>
                <Text style={{
                  marginLeft: 5
                }}>{item.featureName}</Text>
              </View>
              <AntDesign name="right" size={13} color="black" />
            </TouchableOpacity>
          );
        }}
      />
      <Pressable style={[styles.rowCenter, styles.featureItem, { marginHorizontal: 15 }]}
        // onPress={() => {
        //     Alert.alert("Dotai Trip", "OptionAre you sure you want to log out?", [
        //         {
        //             text: 'No',
        //             onPress: () => console.log('No Pressed'),
        //             style: 'cancel',
        //         },
        //         { text: 'Yes', onPress: () => console.log('Yes Pressed') },

        //     ])
        // }}
        onPress={() => setShowAlert(!showAlert)}
      >
        <View style={styles.rowCenter}>
          <View style={styles.icon}><Ionicons name="log-out-outline" size={21} color="black" /></View>
          <Text style={{
            marginLeft: 5
          }}>Log Out</Text>
        </View>
        <AntDesign name="right" size={13} color="black" />
        <AwesomeAlert
          show={showAlert}
          title="Dotai Trip"
          titleStyle={{ fontSize: 20, fontWeight: "600", color: "black" }}
          message='Are you sure you want to log out?' 
          messageStyle={{color: "#080E1E"}}
          contentContainerStyle={{
            borderRadius: 20
          }}

          showCancelButton
          cancelText='No'
          cancelButtonStyle={{
            backgroundColor: "#fff",
            width: "50%",
          }}
          cancelButtonTextStyle={{
            color: "#64646E",
            textAlign: "center",
            fontSize: 15
          }}
          onCancelPressed={() => setShowAlert(false)}

          showConfirmButton
          confirmText='Yes'
          confirmButtonStyle={{
            backgroundColor: "#fff",
            width: "50%"
          }}
          confirmButtonTextStyle={{
            color: "#080E1E",
            fontWeight: "600",
            textAlign: "center",
            fontSize: 15
          }}
          onConfirmPressed={() => setShowAlert(false)}
          />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  icon: {
    backgroundColor: "#f8f4f4",
    borderRadius: 50,
    padding: 5,
    width: 30,
    height: 30
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    margin: "auto",
    borderRadius: 50,
  },
  editBtn: {
    position: "absolute",
    bottom: 1,
    right: 1,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5
  },
  name: {
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    marginBottom: 5
  },
  career: {
    textAlign: "center",
    width: "100%",
    fontSize: 12,
    color: "#64646e"
  },
  featureItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: "#efeeee",
    marginBottom: 10
  },
  featureList: {
    paddingHorizontal: 15,
    flexGrow: 0
  }
});
