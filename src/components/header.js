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
            <View style={{ position: 'absolute', left: 30, top: 20 }}>
                <TouchableOpacity

                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.icon}>
                        <AntDesign name="left" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>{props.headerTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: "#f8f4f4",
        borderRadius: 50,
        padding: 5,
        width: 30,
        height: 30,
    },
    header: {
        width: '100%',
        height: 80,
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: "600",
        fontSize: 19,
    },
    backBtn: {
        // position: "absolute",
        // left: 15
    },
});