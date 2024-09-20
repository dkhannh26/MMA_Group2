// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>HELLO DOTAI</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const SplashScreen = () => {
//   return (
//     <View style={styles.container}>
// <Image 
//   source={require('./assets/image/dotai1.png')}
//   style={styles.icon}
// />
//       <View style={styles.titleContainer}>
//         <Text style={styles.travel}>Travel</Text>
//         <Text style={styles.dotai}>Dotai</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
// icon: {
//   width: 200,
//   height: 200,
//   marginTop: -50,
//   marginBottom:-40
// },
//   titleContainer: {
//     flexDirection: 'row',
//   },
//   travel: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: '#000000', // Màu đen
//   },
//   dotai: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: '#ff3300', // Màu cam
//   },
// });

// export default SplashScreen;












import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


