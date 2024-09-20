import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList, Pressable, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

const profileFeatures = [
    {
        id: 1,
        icon: "settings",
        featureName: "Settings"
    },
    {
        id: 2,
        icon: "star",
        featureName: "Pro Membership"
    },
    {
        id: 3,
        icon: "help-circle",
        featureName: "Help"
    },
    {
        id: 4,
        icon: "phone-call",
        featureName: "Feedback & Support"
    },
    // {
    //     id: 5,
    //     icon: "log-out",
    //     featureName: "Feedback & Support"
    // }
]

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="left" size={20} color="black" style={styles.backBtn} />
                <Text style={styles.headerText}>Profile</Text>
            </View>

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
                    <View style={styles.editBtn}><FontAwesome5 name="pen" size={10} color="black" /></View>
                </View>
                <Text style={styles.name}>Tran Thanh Duy</Text>
                <Text style={styles.career}>UI UX Designer</Text>
            </View>

            <FlatList
                style={styles.featureList}
                data={profileFeatures}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.rowCenter, styles.featureItem]}>
                            <View style={styles.rowCenter}>
                                <Feather name={item.icon} size={20} color="black" style={styles.backBtn} />
                                <Text style={{
                                    marginLeft: 5
                                }}>{item.featureName}</Text>
                            </View>
                            <AntDesign name="right" size={13} color="black" />
                        </View>
                    );
                }}
            />
            <Pressable style={[styles.rowCenter, styles.featureItem, { padding: 15 }]}
                onPress={() => {
                    Alert.alert("Dotai Trip", "OptionAre you sure you want to log out?", [
                        {
                            text: 'No',
                            onPress: () => console.log('No Pressed'),
                            style: 'cancel',
                        },
                        { text: 'Yes', onPress: () => console.log('Yes Pressed') },

                    ])
                }}>
                <View style={styles.rowCenter}>
                    <Feather name="log-out" size={20} color="black" style={styles.backBtn} />
                    <Text style={{
                        marginLeft: 5
                    }}>Log Out</Text>
                </View>
                <AntDesign name="right" size={13} color="black" />
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowCenter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    headerText: {
        width: "85%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 15,
    },
    backBtn: {
        backgroundColor: "#f8f4f4",
        borderRadius: 50,
        padding: 5
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
