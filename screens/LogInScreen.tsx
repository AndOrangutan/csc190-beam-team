import React, { useEffect, useState } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import RegisterScreen from '../screens/RegisterScreen';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleBrowseAsGuest = () => {
    navigation.navigate('Main');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const handleLogin = () => {
    if (username === 'Example' && password === 'password') {
      console.log('Logged in successfully');
      navigation.navigate('Main');
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-evenly bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <View className={`w-4/5 mx-auto`}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            className={`w-full h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="Email"
            numberOfLines={1}
          />
          <View className="h-5" />
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            className={`w-full h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="Password"
            numberOfLines={1}
          />
          <View className="h-3" />

          <View className="flex-row align-center justify-evenly">

            
            <Pressable
              className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22  "
              onPress={handleLogin}>
              <Text className="text-white font-bold py-2 px-4 text-center">Login </Text>
            </Pressable>
            
            
            <Pressable className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22 " onPress={handleRegister}>
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
