import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Profile({ navigation }) {

    const [userName, setUserName] = useState("DOTAI GROUP");
    const [career, setcareer] = useState("UI UX Designer");
    const [email, setEmail] = useState("abcxyz@gmail.com");
    const [phone, setPhone] = useState("0123456789");

    // const { navigation } = props;


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
                </View>
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.career}>{career}</Text>
            </View>

            <View style={[styles.pd15]}>
                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>Full Name</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <Ionicons name="person-outline" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={userName}
                            placeholderTextColor="black"
                        />
                    </View>
                </View>

                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>Position</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <AntDesign name="tagso" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={career}
                            placeholderTextColor="black"
                        />
                    </View>
                </View>

                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>Email Address</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <Ionicons name="mail-outline" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={email}
                            placeholderTextColor="black"
                        />
                    </View>
                </View>

                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>Phone Number</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <SimpleLineIcons name="phone" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={phone}
                            placeholderTextColor="black"
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.titleInfo}>Birth Date</Text>
                    <View style={[styles.rowCenter]}>
                        <TextInput
                            style={[styles.inputText, styles.inputContainer, {textAlign: "center", marginRight: 20}]}
                            placeholder="05"
                            placeholderTextColor="black"
                        />

                        <TextInput
                            style={[styles.inputText, styles.inputContainer, {textAlign: "center",marginRight: 20}]}
                            placeholder="August"
                            placeholderTextColor="black"
                        />

                        <TextInput
                            style={[styles.inputText, styles.inputContainer, {textAlign: "center"}]}
                            placeholder="2003"
                            placeholderTextColor="black"
                        />
                    </View>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    pd15: {
        padding: 15,
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
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        margin: "auto",
        borderRadius: 50,
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
    inputContainer: {
        borderBottomColor: "#EFEEEE",
        borderBottomWidth: 1
    },
    editInfo: {
        marginBottom: 20
    },
    titleInfo: {
        color: "#64646E",
        fontSize: 16
    },
    inputText: {
        padding: 10,
        flex: 1,
    }
});
