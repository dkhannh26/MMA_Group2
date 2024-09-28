import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingDetail from '../screens/bookingDetail';
import AppHeader from './app.header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/requestToBook';
import { Ionicons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeLayout = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={AppNavigation}
                options={{ header: () => <AppHeader /> }} />
            <Stack.Screen name="Booking" component={BookingDetail}
            />
            <Stack.Screen name="Request to book" component={Profile}
            />
        </Stack.Navigator>
    )
}
const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }


                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}

export default HomeLayout;