import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigator/RootNavigator';
import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
