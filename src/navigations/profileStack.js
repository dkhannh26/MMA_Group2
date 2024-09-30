import React from 'react';
import Setting from '../screens/setting';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from '../screens/profile';

const profileStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    header: () => <></>
                }}
            />
            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{
                    title: 'Setting',
                    header: () => <></>
                }}
            />
        </Stack.Navigator>
    );
};

export default profileStack;