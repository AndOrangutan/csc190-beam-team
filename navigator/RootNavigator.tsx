import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  LoginScreen: undefined;
  Main: undefined;
  RegisterScreen: undefined;
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigator = useNavigation();
  const [user, setUser] = React.useState<any>(null);

  const getUser = async () => {
    const user = await SecureStore.getItemAsync('user');
    if (user) {
      setUser(user);
      navigator.navigate('Main');
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <RootStack.Screen name="Main" component={TabNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
