import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


export default function Header(props) {
    // const { navigation } = props;
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            {/* <TouchableOpacity
            // style={[styles.backBtn, styles.icon]}
            >
                <AntDesign
                    name="left" size={20} color="black"
                    style={[styles.backBtn, styles.icon]}
                    onPress={() => navigation.goBack()}
                />
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <View style={styles.icon}>
                    <AntDesign name="left" size={20} color="black" />
                </View>
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.headerTitle}</Text>
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
        height: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "83%",
        paddingHorizontal: 15,
        paddingTop: 30,
        marginBottom: 20
    },
    headerText: {
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 15,
    },
    backBtn: {
        // position: "absolute",
        // left: 15
    },
});