import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Pressable,
  Image,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = ({ token }) => {
  const [newPassword, setNewPassword] = React.useState('');
  const [retypePassword, setRetypePassword] = React.useState('');

  // Retrieve the navigation object using the useNavigation hook
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    // Check if passwords match
    if (newPassword !== retypePassword) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }

    // Check if password contains at least one special character and one number
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const numberRegex = /\d/;

    if (!specialCharacterRegex.test(newPassword) || !numberRegex.test(newPassword)) {
      Alert.alert(
        'Password validation failed',
        'Password must contain at least one special character and one number.'
      );

      if (newPassword.length < 5) {
        Alert.alert('Password validation failed', 'Password must be at least 5 characters long.');
      }

      return;
    }

    // Further logic for password reset...

    // Corrected line: use navigation, not Navigation
    navigation.navigate('LoginScreen');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="h-full items-center justify-evenly bg-sky-900">
        <Image source={require('../assets/ARPF.png')} />

        <View className={`w-4/5 mx-auto`}>
          <TextInput
            value={newPassword}
            onChangeText={setNewPassword} // Added onChangeText to update state
            //secureTextEntry={true}
            className={`w-full h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="New Password"
            numberOfLines={1}
            autoCapitalize="none"
          />
          <View className="h-5" />
          <TextInput
            value={retypePassword}
            onChangeText={setRetypePassword}
            //onChangeText={setPassword}
            secureTextEntry={true}
            className={`w-full h-12 px-3 bg-gray-100 rounded-md border border-gray-300`}
            placeholder="Retype New Password"
            numberOfLines={1}
            autoCapitalize="none"
          />
          <View className="h-3" />

          <View className="flex-row align-center justify-evenly">
            <Pressable
              className="bg-green-600 text-white font-bold py- px-4 rounded-full w-22  "
              onPress={() => handleResetPassword(newPassword)}>
              <Text className="text-white font-bold py-2 px-4 text-center">Continue </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;
