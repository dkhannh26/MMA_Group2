import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Profile() {

    const [userName, setUserName] = useState("DOTAI GROUP");
    const [city, setCity] = useState("Can Tho");
    const [email, setEmail] = useState("abcxyz@gmail.com");
    const [phone, setPhone] = useState("0123456789");

    const [formData, setFormData] = useState({
        username: '',
        city: '',
        email: '',
        phoneNumber: '',
    });

    const handleSubmit = () => {
        const { username, city, email, phoneNumber } = formData;

        if (username.trim() === '' || city.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
            Alert.alert('Error', 'Please fill in all information.');
            return;
        }

        setUserName(username);
        setCity(city);
        setEmail(email);
        setPhone(phoneNumber);

        setFormData({
            username: '',
            city: '',
            email: '',
            phoneNumber: '',
        });


    }

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    }

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
                <Text style={styles.city}>{city}</Text>
            </View>

            <View style={[styles.pd15]}>
                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>Full Name</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <Ionicons name="person-outline" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={userName}
                            placeholderTextColor="#64646E"
                            value={formData.username}
                            onChangeText={text => handleChange('username', text)}
                        />
                    </View>
                </View>

                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>City</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <AntDesign name="tagso" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={city}
                            placeholderTextColor="#64646E"
                            value={formData.city}
                            onChangeText={text => handleChange('city', text)}
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
                            placeholderTextColor="#64646E"
                            value={formData.email}
                            onChangeText={text => handleChange('email', text)}
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
                            placeholderTextColor="#64646E"
                            value={formData.phoneNumber}
                            onChangeText={text => handleChange('phoneNumber', text)}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.titleInfo}>Birth Date</Text>
                    <View style={[styles.rowCenter]}>
                        <TextInput
                            style={[styles.inputText, styles.inputContainer, { textAlign: "center", marginRight: 20 }]}
                            placeholder="05"
                            placeholderTextColor="#64646E"
                        />

                        <TextInput
                            style={[styles.inputText, styles.inputContainer, { textAlign: "center", marginRight: 20 }]}
                            placeholder="August"
                            placeholderTextColor="#64646E"
                        />

                        <TextInput
                            style={[styles.inputText, styles.inputContainer, { textAlign: "center" }]}
                            placeholder="2003"
                            placeholderTextColor="#64646E"
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.sumbitBtn}
                    onPress={handleSubmit}>
                    <Text
                        style={styles.submitText}
                    >Submit</Text>
                </TouchableOpacity>
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
    city: {
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
    },
    sumbitBtn: {
        backgroundColor: "black",
        textAlign: "center",
        borderRadius: 2,
        height: 40,
    },
    submitText: {
        color: "white",
        margin: "auto",
        fontSize: 17,
        fontWeight: "600"
    }
});

