import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/screens/profile';
import Setting from './src/screens/setting';
import Help from './src/screens/help';
import Feedback from './src/screens/feedback';
import Edit from './src/screens/edit-profile';
import Header from './src/components/header'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1 }} initialRouteName="Profile">
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            header: () => <Header headerTitle='Profile' />
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            // headerShown: false,
            header: () => <Header headerTitle='Settings' />
          }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{
            header: () => <Header headerTitle='Help' />
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            header: () => <Header headerTitle='Feedback & Support' />
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            header: () => <Header headerTitle='Edit Profile' />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}