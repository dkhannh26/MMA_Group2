import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingDetail from '../screens/bookingDetail';
import AppHeader from './app.header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/requestToBook';
import { Ionicons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
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
const CustomTabButton = ({ children, onPress, style }) => (
    <TouchableOpacity
        style={[{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 10,
            padding: 10,

        }, style]}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);
const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'View Hotel') {
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
            <Tab.Screen
                name="View Hotel"
                component={Home}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} style={{ backgroundColor: 'black' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="list" size={20} color="white" />
                                <Text style={{ color: 'white', fontSize: 12, marginLeft: 10 }}>View Hotel</Text>
                            </View>
                        </CustomTabButton>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeLayout;