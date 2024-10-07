import React from 'react';
import { SectionList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Setting() {

    const settingFeatures = [
        {
            title: "Account",
            data: [
                {
                    icon: <MaterialIcons name="language" size={19} color="black" />,
                    name: "Change Language"
                },
                {
                    icon: <Feather name="settings" size={19} color="black" />,
                    name: "Manage Account"
                },
                {
                    icon: <MaterialIcons name="people-outline" size={19} color="black" />,
                    name: "Invite Friends"
                },
                {
                    icon: <Feather name="bookmark" size={19} color="black" />,
                    name: "Saved Addresses"
                },
            ]
        },
        {
            title: "General",
            data: [
                {
                    icon: <MaterialIcons name="privacy-tip" size={19} color="black" />,
                    name: "Privacy Policy"
                },
                {
                    icon: <SimpleLineIcons name="lock" size={19} color="black" />,
                    name: "Term of Service"
                },
                {
                    icon: <Feather name="database" size={19} color="black" />,
                    name: "Data Attribution"
                },
            ]
        },
    ]

    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <SectionList
                sections={settingFeatures}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.rowCenter, styles.settingItem]}
                    >
                        <View style={styles.rowCenter}>
                            <View style={styles.icon}>{item.icon}</View>
                            <Text style={{
                                marginLeft: 5
                            }}>{item.name}</Text>
                        </View>
                        <AntDesign name="right" size={13} color="black" />
                    </TouchableOpacity>
                )
                }
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.title}>{title}</Text>
                )
                }
                style={styles.sectionList}
            />
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
    sectionList: {
        paddingHorizontal: 15,
        flexGrow: 0
    },
    settingItem: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: "#EFEEEE",
        marginBottom: 10
    },
    title: {
        fontWeight: "600",
        fontSize: 16,
        marginVertical: 5
    }
});