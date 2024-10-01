import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import Setting from '../screens/setting';
import Help from '../screens/help';
import Feedback from '../screens/feedback';
import Edit from '../screens/edit-profile';
import Header from '../components/header'

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
      <Stack.Navigator style={{ flex: 1 }} >
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
  );
}