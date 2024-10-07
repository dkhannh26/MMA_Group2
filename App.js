
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Authentication from './src/authentication/authentication';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Authentication />
        {/* <TripNavigator /> thinh*/}
        {/* <StackNavigator /> nguyen*/}
      </NavigationContainer>
    </SafeAreaView>
  );
}

