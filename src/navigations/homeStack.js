import React from 'react';
import LocationDetail from '../screens/location-detail';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/home';

const homeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="Home"
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
        </Stack.Navigator>
    );
};

export default homeStack;