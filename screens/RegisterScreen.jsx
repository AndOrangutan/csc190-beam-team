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
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');


  const handleRegister = () => {
    // Check if passwords match
    if (password !== retypePassword) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }

    // Check if password contains at least one special character and one number
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const numberRegex = /\d/;


    if (!specialCharacterRegex.test(password) || !numberRegex.test(password) || password.length < 5) {
      Alert.alert(
        'Password validation failed',
        'Password must be at least 5 characters long and contain at least one special character and one number.'
      );
      return;
    }
  
    if (!isEmailValid(email)) {
      Alert.alert('Email validation failed', 'Please enter a valid email address.');
      return;
    }

    // If all validations pass, proceed with registration
    // ...
  };
  

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
  };


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-center bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <View className={`w-4/5 flex flex-row mb-2 mt-4`}>
          <TextInput
            //value={firstName}
            // onChangeText={setFirstName}
            className={`flex-1 h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="First Name"
            numberOfLines={1}
            returnKeyType="done"
          />
          <TextInput
            //value={lastName}
            // onChangeText={setLastName}
            className={`flex-1 h-12 px-3 bg-gray-100 rounded-md border border-gray-300 ml-2`}
            placeholder="Last Name"
            numberOfLines={1}
            returnKeyType="done"
          />
        </View>
        <TextInput

          //value={emailValue}
          onChangeText={(text) => setEmail(text)}
          className={`w-4/5 h-12 px-3 bg-gray-100 rounded-md border border-gray-300 mb-2`}
          placeholder="Email"
          numberOfLines={1}
          returnKeyType="Done"

          //value={email}
          //onChangeText={setEmail}
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
          className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22 mb-4 "
          onPress={handleRegister}>
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
