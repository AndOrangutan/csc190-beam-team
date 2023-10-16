import React, { useEffect } from 'react';
import { View, Button, Alert, Text ,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import LoginScreen from './LogInScreen';
import { supabase } from '../server/dist/server';


const logoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    //signout from local
    await SecureStore.deleteItemAsync('user');
    //sign out form supabase
    const { error } = await supabase.auth.signOut()
    navigation.navigate(LoginScreen); //back to log in Screen, might not working

    useEffect( () => {
      handleLogout();
    })
  };

    

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
export default logoutScreen;

//if above code not work, try below 
//******************************************************************************* */
/*
const LogoutScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('user'); 
      Alert.alert('Logged Out', 'You have been logged out successfully.');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'logging out failed. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Are you sure you want to log out?</Text>
      <Pressable
        style={{
          backgroundColor: 'red',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default LogoutScreen;


*/