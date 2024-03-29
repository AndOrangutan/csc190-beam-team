import { IP, PORT } from '@env';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Pressable,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const handleDeepLink = (event) => {
      const { url } = event;

      if (url) {
        const link = url.split('?link=')[1];
        setLink(link);
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    // Remove the listener when the component unmounts
  }, []);

  const handleResetPassword = async () => {
    try {
      const response = await fetch(`http://${IP}:${PORT}/users/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // const json = await response.json();

      if (response.ok) {
        Alert.alert('Password reset instructions sent to your email.');
        navigation.goBack();
      } else {
        const json = await response.json();
        Alert.alert('Error', json.error || 'Failed to initiate password reset. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating password reset:', error);
      Alert.alert('Error', 'Failed to initiate password reset. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-evenly bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <View className="w-4/5 items-center">
          <TextInput
            value={email}
            onChangeText={setEmail}
            className={`w-full text-center h-12 px-3 bg-gray-100 rounded-md border border-gray-300 mb-2`}
            placeholder="Email"
            numberOfLines={1}
            returnKeyType="done"
            autoCapitalize="none"
          />

          <Pressable
            className="bg-green-600 mt-4 text-white font-bold py- px-4 rounded-full w-1/2 mb-4"
            onPress={handleResetPassword}>
            <Text className="text-white font-bold py-2 px-4 text-center">Reset Password</Text>
          </Pressable>
        </View>

        {/* <View className="justify-end">
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text className="text-white font-bold py-2 px-4 text-center">Back to Login</Text>
          </Pressable>
        </View> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
