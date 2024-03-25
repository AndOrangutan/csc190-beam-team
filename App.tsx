import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './navigator/RootNavigator';
import 'react-native-gesture-handler';

LogBox.ignoreLogs(['ViewPropTypes will be removed', 'ColorPropType will be removed']);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
