import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import BookingDetail from '../screens/bookingDetail';
import Home from '../screens/home';
import Profile from '../screens/requestToBook';
import { MyMap, HotelMap } from '../screens/location';
import Hotels from '../screens/hotels';
import Header from '../components/header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeLayout = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={AppNavigation}
                options={{ headerShown: false }} />
            <Stack.Screen name="Booking" component={BookingDetail}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Request to book" component={Profile}
                options={{
                    header: () => <Header headerTitle='Request to book'></Header>
                }}
            />
        </Stack.Navigator>
    )
}
const CustomTabButton = ({ children, onPress, focused }) => (
    <TouchableOpacity
        style={[{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 10,
            padding: 10,
            backgroundColor: focused ? 'black' : '#888',
        }]}
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
                component={Hotels}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} focused={props.accessibilityState.selected} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="list" size={20} color="white" />
                                <Text style={{ color: 'white', fontSize: 12, marginLeft: 10 }}>View Hotel</Text>
                            </View>
                        </CustomTabButton>
                    ),
                }}
            />
            <Tab.Screen
                name="View Map"
                component={MyMap}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} focused={props.accessibilityState.selected} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="list" size={20} color="white" />
                                <Text style={{ color: 'white', fontSize: 12, marginLeft: 10 }}>View Map</Text>
                            </View>
                        </CustomTabButton>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeLayout;