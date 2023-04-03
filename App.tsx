import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import RootNavigator from './navigator/RootNavigator';

import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    // Default
    // <View style={styles.container}>
    // TailwindCSS
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
