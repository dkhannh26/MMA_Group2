import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import { Ionicons } from 'react-native-vector-icons';
import HomeStack from './home-stack';
import Save from '../screens/save';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SaveStack from './save-stack';
import TripNavigator from './TripNavigator';

const Tab = createBottomTabNavigator();

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

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeStack') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    else if (route.name === 'Save') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Trip') {
                        iconName = focused ? 'car-sport' : 'car-sport-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: "Home" }} />
            <Tab.Screen name="Save" component={SaveStack} />
            <Tab.Screen name="Trip" component={TripNavigator} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
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

export default Navigation;