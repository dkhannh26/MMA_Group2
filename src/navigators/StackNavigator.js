import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../components/SplashScreen';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import VerifyScreen from '../components/VerifyScreen';
import SuccessScreen from '../components/SuccessScreen';
import Onboarding from '../components/Onboarding';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import ResetPasswordScreen from '../components/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
