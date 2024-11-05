import React, { useState } from 'react';
import LocationDetail from '../screens/location-detail';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/home';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeLayout from '../navigation/app.navigation';


const HomeStack = () => {
    const navigator = useNavigation()
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="HomeSreen"
                component={Home}
                options={{
                    title: 'Home',
                    header: () => <></>
                }}
            />
            <Stack.Screen
                name="LocationDetail"
                component={LocationDetail}
                options={{
                    title: 'Home',
                    header: () => <></>
                }}
            />
            <Stack.Screen
                name="PlaceDetail"
                component={HomeLayout}
                options={{
                    header: () => <></>
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerDetail: {
        position: 'absolute',
        top: 40,
        flexDirection: 'row'
    },
    backBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    likeBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeStack;