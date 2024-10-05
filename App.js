
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Navigation from './src/navigations/navigation';
import Authentication from './src/authentication/authentication';

export default function App() {
  return (

    <NavigationContainer>
      <Authentication />
      {/* <StackNavigator /> */}
    </NavigationContainer>

  );
}

