import { IP, PORT } from '@env';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import TabNavigator from './TabNavigator';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import InformationScreen from '../screens/InformationScreen';
import LoginScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

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
      // navigator.navigate('Main', { user });
    }
  };

  const isEmailValid = (email: string): boolean => {
    // Simple email validation regex pattern
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const handleLogin = async (email: string, password: string) => {
    if (!isEmailValid(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
    }
    const response = await fetch(`http://${IP}:${PORT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (response.ok) {
      await SecureStore.setItemAsync('user', JSON.stringify(json.data));
      setUser(JSON.stringify(json.data));
      navigator.navigate('Main');
    } else {
      Alert.alert('Login failed', 'Invalid email or password.');
    }
  };

  const handleAuth = async () => {
    try {
      if (user) {
        await SecureStore.deleteItemAsync('user');
        setUser(null);
        Alert.alert('You have Logged out');
      } else {
        navigator.navigate('Login');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const handleOpenUrl = (url: any) => {
      const token = url.match(/access_token=([^&]+)/);
      if (token && token[1]) {
        console.log(`Extracted token: ${token[1]}`);
        // Assuming 'Reset Password' is the correct screen name
        navigator.navigate('Reset Password', { token: token[1] });
      }
    };
    Linking.addEventListener('url', (event) => handleOpenUrl(event.url));

    Linking.getInitialURL().then((url) => {
      if (url) handleOpenUrl(url);
    });
  }, []);

  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Main">
        {() => <TabNavigator user={user} handleAuth={handleAuth} />}
      </RootStack.Screen>
      <RootStack.Screen name="Login">
        {() => <LoginScreen handleLogin={handleLogin} />}
      </RootStack.Screen>
      <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <RootStack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <RootStack.Screen name="Reset Password" component={ResetPasswordScreen} />

      <RootStack.Screen
        name="Information"
        component={InformationScreen}
        options={{ presentation: 'modal' }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
