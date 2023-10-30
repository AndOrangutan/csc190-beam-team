import { StackNavigationProp } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  View,
  Text,
  Pressable,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList } from '../navigator/RootNavigator';
import { supabase } from '../server/dist/server';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isEmailValid = (email: string): boolean => {
    // Simple email validation regex pattern
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const handleBrowseAsGuest = () => {
    navigation.navigate('Main');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const handleLogin = async () => {
    if (!isEmailValid(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
    }
    const response = await fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (response.ok) {
      await SecureStore.setItemAsync('user', JSON.stringify(json.data));
      const user = await SecureStore.getItemAsync('user');
      navigation.navigate('Main', { user });
    } else {
      Alert.alert('Login failed', 'Invalid email or password.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-evenly bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <View className={`w-4/5 mx-auto`}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            className={`w-full h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="Email"
            keyboardType="email-address"
            numberOfLines={1}
            autoCapitalize='none'
          />
          <View className="h-5" />
          <TextInput
            value={password}
            // secureTextEntry={true}
            onChangeText={setPassword}
            className={`w-full h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="Password"
            numberOfLines={1}
            autoCapitalize='none'
          />
          <View className="h-3" />

          <View className="flex-row align-center justify-evenly">
            <Pressable
              className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22  "
              onPress={handleLogin}>
              <Text className="text-white font-bold py-2 px-4 text-center">Login </Text>
            </Pressable>

            <Pressable
              className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22 "
              onPress={handleRegister}>
              <Text className="text-white font-bold py-2 px-4 text-center">Register</Text>
            </Pressable>
          </View>
          <View className="h-3" />

          <View>
            <Pressable onPress={handleBrowseAsGuest}>
              <Text className="text-white font-bold py-2 px-4 text-center">or browse as guest</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
