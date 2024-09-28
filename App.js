import { Text, View } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeLayout from "./src/navigation/app.navigation";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <HomeLayout />
      </NavigationContainer>
    </SafeAreaView>
  );
}

