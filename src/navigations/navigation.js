import React, { useState } from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import Setting from '../screens/setting';
import Help from '../screens/help';
import Feedback from '../screens/feedback';
import Edit from '../screens/edit-profile';
import Header from '../components/header'

const Stack = createNativeStackNavigator();


export default function Navigation() {
 
  const [profile, setProfile] = useState({
    username: 'DOTAI GROUP',
    city: 'Can Tho',
    email: 'abcxyz@gmail.com',
    phone: '0123456789',
  });

  return (
    <Stack.Navigator style={{ flex: 1 }} initialRouteName="Profile"
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="Profile"
        // component={Profile}
        options={{
          header: () => <Header headerTitle='Profile' />
        }}
      >
         {props => <Profile {...props} profile={profile} setProfile={setProfile} />}
      </Stack.Screen>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          // headerShown: false,
          header: () => <Header headerTitle='Settings' />,
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
        // component={Edit}
        options={{
          header: () => <Header headerTitle='Edit Profile' />,
          animation: 'default',
          animationDuration: 10,
        }}
      >
         {props => <Edit {...props} profile={profile} setProfile={setProfile} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}