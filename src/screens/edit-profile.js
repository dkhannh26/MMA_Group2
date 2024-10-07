import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

export default function Edit({ navigation, profile, setProfile }) {

    const [username, setUsername] = useState(profile.username);
    const [city, setCity] = useState(profile.city);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);

    const [errors, setErrors] = useState({ username: '', city: '', email: '', phone: '' });

    const handleSubmit = () => {
        let valid = true;
        let newErrors = { username: '', city: '', email: '', phone: '' };

        if (username.trim() === '' || city.trim() === '' || email.trim() === '' || phone.trim() === '') {
            Alert.alert('Error', 'Please fill in all information.');
            return;
        }

        setErrors(newErrors);

        if (valid) {
            // Cập nhật profile qua setProfile
            setProfile({ username, city, email, phone });

            // Quay lại màn hình Profile
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Edit")}
                        style={styles.editBtn}>
                        <Feather name="camera" size={10} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.pd15]}>
                <View style={styles.editInfo}>
                    <Text style={styles.titleInfo}>Full Name</Text>
                    <View style={[styles.rowCenter, styles.inputContainer]}>
                        <Ionicons name="person-outline" size={22} color="black" />
                        <TextInput
                            style={styles.inputText}
                            placeholder={username}
                            placeholderTextColor="#64646E"
                            value={username}
                            onChangeText={text => {
                                setUsername(text);
                                if (text.trim() !== '') {
                                    setErrors(prev => ({ ...prev, username: '' }));
                                }
                            }}
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
                            value={city}
                            onChangeText={text => {
                                setCity(text);
                                if (text.trim() !== '') {
                                    setErrors(prev => ({ ...prev, city: '' }));
                                }
                            }}
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
                            value={email}
                            onChangeText={text => {
                                setEmail(text);
                                if (text.trim() !== '') {
                                    setErrors(prev => ({ ...prev, email: '' }));
                                }
                            }}
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
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={text => {
                                setPhone(text);
                                if (text.trim() !== '') {
                                    setErrors(prev => ({ ...prev, phone: '' }));
                                }
                            }}
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
    editBtn: {
        position: "absolute",
        bottom: 1,
        right: 1,
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 5
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
        marginTop: 10
    },
    submitText: {
        color: "white",
        margin: "auto",
        fontSize: 17,
        fontWeight: "600"
    }
});

