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

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    // Check if passwords match
    if (password !== retypePassword) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }

    // Check if password contains at least one special character and one number
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const numberRegex = /\d/;

    if (!specialCharacterRegex.test(password) || !numberRegex.test(password)) {
      Alert.alert(
        'Password validation failed',
        'Password must contain at least one special character and one number.'
      );
      if (password.length < 5) {
        Alert.alert('Password validation failed', 'Password must be at least 5 characters long.');
        return;
      }
      return;
    }

    // Prepare the registration data to send to the server
    const registrationData = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        Alert.alert('Registration Error', errorData.error);
        return;
      }

      // Registration successful, navigate to the login screen or show a success message
      navigation.navigate('Login');
    } catch (error) {
      console.error('Network error:', error.message);
      Alert.alert('Network Error', 'An error occurred. Please try again later.');
    }
  };


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-center bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <View className={`w-4/5 flex flex-row mb-2 mt-4`}>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            className={`flex-1 h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="First Name"
            numberOfLines={1}
            returnKeyType="done"
          />
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            className={`flex-1 h-12 px-3 bg-gray-100 rounded-md border border-gray-300 ml-2`}
            placeholder="Last Name"
            numberOfLines={1}
            returnKeyType="done"
          />
        </View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className={`w-4/5 h-12 px-3 bg-gray-100 rounded-md border border-gray-300 mb-2`}
          placeholder="Email"
          numberOfLines={1}
          returnKeyType="done"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          className={`w-4/5 h-12 px-3 bg-gray-100 rounded-md border border-gray-300 mb-2`}
          placeholder="Password"
          numberOfLines={1}
          secureTextEntry={true}
        />
        <TextInput
          value={retypePassword}
          onChangeText={setRetypePassword}
          className={`w-4/5 mx-auto h-12 px-3 bg-gray-100 rounded-md border border-gray-300 mb-5`}
          placeholder="Retype Password"
          numberOfLines={1}
          returnKeyType="done"
          secureTextEntry={true}
        />
        <Pressable
          className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22 mb-4 "onPress={handleRegister}>
          <Text className="text-white font-bold py-2 px-4 text-center">Register</Text>
        </Pressable>

        <View className="justify-end">
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text className="text-white font-bold py-2 px-4 text-center">
              Already have an account? Login
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;