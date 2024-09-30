import React, { useState } from 'react';
import LocationDetail from '../screens/location-detail';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/home';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Save from '../screens/save';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    return (
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={27}
                color={liked ? "red" : "white"}
            />
        </Pressable>
    );
};

const SaveStack = () => {
    const navigator = useNavigation()
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="LocationDetail"
                component={Save}
                options={{
                    title: 'Home',
                    header: () => <></>
                }}
            />
        </Stack.Navigator>
    );
};

export default SaveStack;