import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LogInScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  Main: undefined;
  MyModal: { userId: string; name: string };
  // Order: { order: any };
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Main" component={TabNavigator} />
  </RootStack.Navigator>
  );
};

export default RootNavigator;
