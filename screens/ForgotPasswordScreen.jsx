import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../server/dist/server';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);

  const handleResetPassword = async () => {
    const resetData = {
      email,
    };

    try {
      const response = await fetch('http://localhost:8000/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        Alert.alert('Reset Password Error', errorData.error);
      } else {
        setPasswordResetSuccessful(true);
      }

      navigation.navigate('ResetPasswordSuccess');
    } catch (error) {
      console.error('Network error:', error.message);
      Alert.alert('Network Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-center bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <TextInput
          value={email}
          onChangeText={setEmail}
          className={`w-4/5 h-12 px-3 bg-gray-100 rounded-md border border-gray-300 mb-2`}
          placeholder="Email"
          numberOfLines={1}
          returnKeyType="done"
        />

        <Pressable
          className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22 mb-4"
          onPress={handleResetPassword}>
          <Text className="text-white font-bold py-2 px-4 text-center">Reset Password</Text>
        </Pressable>

        <View className="justify-end">
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text className="text-white font-bold py-2 px-4 text-center">Back to Login</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;