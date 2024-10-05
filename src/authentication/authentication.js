import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerifyScreen from '../screens/VerifyScreen';
import SuccessScreen from '../screens/SuccessScreen';
import Onboarding from '../components/Onboarding';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import ResetPasswordScreen from '../components/ResetPasswordScreen';
import Navigation from '../navigations/navigation';

const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="Verify"
        component={VerifyScreen}
      />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        options={{
          header: () => <></>
        }}
        name="Verified"
        component={Navigation}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
